const domain = "http://dev-challenge.thisplace.com/";

var submitForm = (data) => {
//send data using default x-www-form-url-encoded method as preflight errors do not allow for json data.
let localUrl = `${domain}hello`;
  $.ajax({
    type: "POST",
    url: localUrl,
    data: data,
    success: (response) => {
        if(response){
            $('.container').append(`<div id="response" class="col-md-12 alert alert-info"><p>${response}</p></div>`);
            let arrSplit = getURLParams(response);
            console.log(arrSplit);
            getQuestion(arrSplit[2], arrSplit[3], arrSplit[4]);
        }
    },
    error: function (xhr ,status, errorThrown) {
        console.log(xhr, status, errorThrown);
    }
  });
};

//get URL Parameters for questions
var getURLParams = (response) => {
    let myRegex = /(\/question\/).*/g
    let arr = response.match(myRegex);
    console.log(arr);
    let arrSplit = arr[0].split('/');
    console.log(arrSplit);
    return arrSplit;
};


var getQuestion = (qNum, name, alphaNumeric) => {
    let localurl = `${domain}question/${qNum}/${name}/${alphaNumeric}`;
    $.ajax({
        type: "GET",
        url: localurl,
        success: function(response){
            console.log(response);
            //clean response: take out carraige returns from response
            let cleanResponse = response.replace(/[\n\r]+/g, ' ');
            let arithmeticReGex = /(Arithmetic)/ig;
            let wordReGex = /(Word Question)/ig;
            let guessNumberReGex = /(Guess a number question)/ig;
            let TestTypeArr = response.match(arithmeticReGex) || response.match(wordReGex) || response.match(guessNumberReGex);
            console.log('TestTypeArr: ', TestTypeArr);
            let answer;
            let type = operatorDecider(TestTypeArr);
            console.log('type: ', type);
            let local = {};
            //Arithmetic Logic
            if (type ===  'arithmeticQuestion'){
                console.log('--- Arithmetic Question ---');
                
                //extract arithmetic question from string
                let questionRegex = /(?<=Arithmetic Question)(.*)(?=\?)/ig;
                console.log('here: ', cleanResponse.match(questionRegex));
                
                let question = cleanResponse.match(questionRegex).toString();
                console.log('question: ', question);

                //extract numbers and operators
                let mathOpRegEx = /(?<=what is )(.*)/ig;
                let questionArr = question.match(mathOpRegEx)[0].split(' ');
                console.log('questionArr: ', questionArr);

                local.args = {
                    operator: questionArr[1],
                    num1: questionArr[0],
                    num2: questionArr[2]
                };
                answer = calcAnswer(local.args);
            }

            //Word Logic
            if (type ===  'wordQuestion'){
                console.log('--- Word Question ---');
                //extract word question from string
                let wordRegex = /(?<=Word Question)(.*)(?=\?)/ig;
                console.log('here: ', cleanResponse.match(wordRegex));
                let question = cleanResponse.match(wordRegex).toString();
                console.log('question: ', question);

                //extract numbers and operators
                let mathOpRegEx = /(?<=what )(.*)/ig;
                let questionArr = question.match(mathOpRegEx)[0].split(' ');
                console.log('questionArr: ', questionArr);

                local.qArgs = {
                    operator: questionArr[2],
                    count: parseInt(questionArr[3]),
                    word: questionArr[8].replace(/['"]+/g, '')//strip out ""
                };
                console.log(local.qArgs);
                answer = calcAnswer(local.qArgs);
            }

            //Guess a Number Logic
            if(type ===  'guessNumberQuestion'){
                console.log('--- Guess a Number--');

                //extract guess a number question from string
                let guessNumberRegex = /(?<=from)(.*)(?=What is my number\?)/ig;
                console.log('here: ', cleanResponse.match(guessNumberRegex));
                let question = cleanResponse.match(guessNumberRegex).toString();
                console.log('question: ', question);

                //extract numbers and operators
                let mathOpRegEx = /(?<= )(.*)(\.)/g;
                let questionArr = question.match(mathOpRegEx)[0].split(' ');
                console.log(questionArr);

                local.qArgs = {
                    operator: questionArr[1],
                    num1: parseInt(questionArr[0]),
                    num2: parseInt(questionArr[2]),
                    count: parseInt(questionArr[20])
                };

                answer = calcAnswer(local.qArgs);
            }
            console.log('is answer still undefined ?: ', answer);
            if(response && answer !== undefined){
                $('.container').append(`<div id="question${qNum}" class="col-md-12 alert alert-warning"><p>${response}</p></div>`);
                postAnswer(qNum, name, alphaNumeric, answer);
            }
        },
        error: function(xhr, status, errorThrown){
            console.log(xhr, status, errorThrown);
        }
    });
};

//object holds arithmetic methods, word methods and guess a number methods
var testObjs = {
    add: (num1, num2) => { return parseInt(num1) + parseInt(num2); },
    subtract: (num1, num2) => { return parseInt(num1) - parseInt(num2); },
    multiply: (num1, num2) => { return parseInt(num1) * parseInt(num2);},
    lastWord: (word, count) => { return word.substring(word.length - count); },
    firstWord: (word, count) => { return word.substring(0, count); },
    to: () => { return Math.floor(Math.random() * 9); }
};

//decides what type of Test/ Question we are dealing with.
var operatorDecider = (TestTypeArr) => {
    local = {};
    if(TestTypeArr !== null && TestTypeArr.toString().toLowerCase() === "arithmetic"){
        local.type = "arithmeticQuestion";
    }else if (TestTypeArr !== null && TestTypeArr.toString().toLowerCase() ===  'word question'){
        local.type = "wordQuestion"
        
    }else if (TestTypeArr !== null && TestTypeArr.toString().toLowerCase() ===  'guess a number question'){
        //guess a number question
        local.type = "guessNumberQuestion";
    }else {
        //unknown type
        local.type = "Error: oOps! something has gone wrong. try again later."
    }
    return local.type;
};

// gets operator returns result based on operator function 
var calcAnswer = (obj) => {
    let result;
    switch (obj.operator) {
        //arithmetic operator
        case "add":
        case "and":
        case "plus": result = testObjs.add(obj.num1, obj.num2);
            break;
        case "subtract":
        case "minus": result = testObjs.subtract(obj.num1, obj.num2);
            break;
        case "multiply":
        case "times": result = testObjs.multiply(obj.num1, obj.num2);
            break;
        // word operators
        case "last": result = testObjs.lastWord(obj.word, obj.count);
            break;
        case "first": result = testObjs.firstWord(obj.word, obj.count);
            break;
        //Guess a number operators
        case "to": result = testObjs.to();
            break;
        default: result = "Error: operation cannot be carried out due to undefined operator.";
            break;
    }
    return result;
};

//gets Prize
var getPrize = (response) => {
    let myRegex = /(\/success\/).*/g
    let arr = response.match(myRegex);
    let arrSplit = arr[0].split('/');
    let success = arrSplit[1];
    let name = arrSplit[2];
    let alphaNumeric = arrSplit[3];

    let url = `${domain}${success}/${name}/${alphaNumeric}`;
    $.ajax({
        type: "GET",
        url: url,
        success: (response) => { $('.container').append(`<div id="prize">${response}</div>`); },
        error: (xhr, status, errorThrown) => { console.log(xhr, status, errorThrown); }
    })
};

var appendAnswer = (obj) => {
    $('.container').append(`<div id="answer_${obj.qNum}_${obj.count}" class="col-md-12 alert alert-${(obj.response.indexOf('Correct!')> -1)?'success': 'danger'}">
    <p>${obj.data}</p>
    <p>${obj.response}</p>
    </div>`);
};

var resetForm = () => {
    if($('.alert').length) $('.alert').remove();
    if($('#prize').length) $('#prize').remove();
}
//set global variable y
let y = 0;
var postAnswer = (qNum, name, alphaNumeric, answer) => {
    let url = `${domain}question/${qNum}/${name}/${alphaNumeric}`;
    let data = `answer=${answer}`;
    
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: (response) => {
            if (response) {
                let local = {};
                local.rData = {
                    qNum: qNum, 
                    count: y++, 
                    response: response, 
                    data: data
                };
                appendAnswer(local.rData);
                //console.log('response.indexOf(incorrect): ', response.indexOf('incorrect') , 'qNum: ',qNum);
                
                //if answer is incorrect and it's question number 5
                if (response.indexOf('incorrect') && parseInt(qNum) === 5) {
                    
                    let i = parseInt(response.match(/\d+/)[0]);
                    if (response.indexOf('Correct!') > -1) {
                        getPrize(response);
                    } else {
                        getQuestion(5, name, alphaNumeric);

                    }
                } 
                
                //all other questions
                if(parseInt(qNum) !== 5){
                    let arrSplit = getURLParams(response);
                    getQuestion(arrSplit[2], arrSplit[3], arrSplit[4]);
                }

            }
        },
        error: (xhr, status, errorThrown) => { console.log(xhr, status, errorThrown); }
    });
};

//submit form
$(document).ready(() => {  
    $("form").on("submit", (evt) => {
        evt.preventDefault();
        //if there are any alerts/ results erase them
        resetForm();
        submitForm($("form").serialize());
    });

});
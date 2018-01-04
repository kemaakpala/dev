let url = "http://dev-challenge.thisplace.com/hello";
let dataType = "json";
let contentType = "application/json";

function submitForm(data) {
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function(response){
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
}

//get URL Parameters for questions
function getURLParams(response) {
    let myRegex = /(\/question\/).*/g
    let arr = response.match(myRegex);
    console.log(arr);
    let arrSplit = arr[0].split('/');
    console.log(arrSplit);
    return arrSplit;
}


function getQuestion(qNum, name, alphaNumeric){
    let url = `http://dev-challenge.thisplace.com/question/${qNum}/${name}/${alphaNumeric}`;
    $.ajax({
        type: "GET",
        url: url,
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

            //Arithmetic Logic
            if (TestTypeArr !== null && TestTypeArr.toString() ===  'Arithmetic'){
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
                let num1 = questionArr[0];
                let operator = questionArr[1];
                let num2 = questionArr[2];
                answer = (function (operator) {
                    let result;
                    switch (operator) {
                        case "add":
                        case "and":
                        case "plus":
                            result = add(num1, num2);
                            break;
                        case "subtract":
                        case "minus":
                            result = subtract(num1, num2);
                            break;
                        case "multiply":
                        case "times":
                            result = multiply(num1, num2);
                            break;
                        default:
                            result = 0;
                            break;
                    }
                    return result;
                }(operator));
            }

            //Word Logic
            if (TestTypeArr !== null && TestTypeArr.toString().toLowerCase() ===  'word question'){
                console.log('--- Word Question ---');
                //extract word question from string
                let wordRegex = /(?<=Word Question)(.*)(?=\?)/ig;
                console.log('here: ', cleanResponse.match(wordRegex));
                let question = cleanResponse.match(wordRegex).toString();
                console.log('question: ', question);

                //extract numbers and operators
                let mathOpRegEx = /(?<=what )(.*)/ig;
                let questionArr = question.match(mathOpRegEx)[0].split(' ');
                let operator = questionArr[2];
                let count = parseInt(questionArr[3]);
                let word = questionArr[8].replace(/['"]+/g, ''); //strip out ""
                console.log(operator, count, word);
                console.log('questionArr: ', questionArr);
                answer = (function (operator) {
                    let result;
                    switch (operator) {
                        case "last":
                            result = word.substring(word.length - count);
                            break;
                        case "first":
                            result = word.substring(0, count);
                            break;
                        default:
                            result = '';
                            break;
                    }
                    return result;
                }(operator));
            }

            //Guess a Number Logic
            if(TestTypeArr !== null && TestTypeArr.toString().toLowerCase() ===  'guess a number question'){
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
                let operator = questionArr[1];
                let count = parseInt(questionArr[20]);
                let num1 = parseInt(questionArr[0]);
                let num2 = parseInt(questionArr[2]);

                answer = (function(operator){
                    let result;
                    switch (operator){
                        case "to":
                            result = Math.floor(Math.random() * 9);
                            break;
                        default:
                            result = 0; 
                    }
                    return result;
                }(operator));
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
}

//arithmetic functions
function add(num1, num2){
    let answer = parseInt(num1) + parseInt(num2);
    return answer;
}

function subtract(num1, num2){
    let answer = parseInt(num1) - parseInt(num2);
    return answer;
}

function multiply(num1, num2){
    let answer = parseInt(num1) * parseInt(num2);
    return answer;
}

//gets Prize
function getPrize (response){
    let myRegex = /(\/success\/).*/g
    let arr = response.match(myRegex);
    let arrSplit = arr[0].split('/');
    let success = arrSplit[1];
    let name = arrSplit[2];
    let alphaNumeric = arrSplit[3];

    let url = `http://dev-challenge.thisplace.com/${success}/${name}/${alphaNumeric}`;
    $.ajax({
        type: "GET",
        url: url,
        success: function (response){
            $('.container').append(`<div id="prize">${response}</div>`);
        },
        error: function(xhr, status, errorThrown){
            console.log(xhr, status, errorThrown);
        }
    })
}

//set global variable y
let y = 0;
function postAnswer(qNum, name, alphaNumeric, answer){
    let url = `http://dev-challenge.thisplace.com/question/${qNum}/${name}/${alphaNumeric}`;
    let data = `answer=${answer}`;
    
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (response) {
            if (response) {
                $('.container').append(`<div id="answer_${qNum}_${y++}" class="col-md-12 alert alert-${(response.indexOf('Correct!')> -1)?'success': 'danger'}">
                <p>${data}</p>
                <p>${response}</p>
                </div>`);
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
        error: function (xhr, status, errorThrown){
            console.log(xhr, status, errorThrown);
        }
    });
}

//submit form
$(document).ready(function() {  
    $("form").on("submit", function(evt){
        evt.preventDefault();
        //if there are any alerts/ results erase them
        if($('.alert').length){$('.alert').remove()}
        submitForm($("form").serialize());
    });

});
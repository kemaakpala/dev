// class myMap <T>{
//     private thisEmptyObject:{[key:string]: T} = {};
//     setItem(key: string, item: T){
//         this.thisEmptyObject[key] = item; 
//     }
//     getItem(key: string){
//         return this.thisEmptyObject[key];
//     }
//     clear(){
//         return this.thisEmptyObject = {};
//     }
//     printMap(){
//         console.log(this.thisEmptyObject);
//     }
// }

//recommended solution

class MyMap <T> {
    private map: {[key: string]: T} = {};

    setItem (key: string, item: T){
        this.map[key] = item;
    }

    getItem (key:string){
        return this.map[key];
    }
<<<<<<< HEAD
    clear(){
        return this.thisEmptyObject = {};
    }
    printMap(){
        console.log(this.thisEmptyObject);
=======

    clear() {
        this.map = {};
    }

    printMap () {
        for (let key in this.map){
            console.log(key, this.map);
        }
>>>>>>> bd5453929f9bfb889e8e7b720a3d0e864328ae06
    }
}

const numberMap = new MyMap <number> ();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

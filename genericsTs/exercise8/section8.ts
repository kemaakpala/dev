class myMap <U extends string,T extends number | string>{
    thisEmptyObject:{} = {};
    setItem(key: string, item: T){
        this.thisEmptyObject[key] = item; 
    }
    getItem(key: string){
        return this.thisEmptyObject[key];
    }
    clear(){
        return this.thisEmptyObject = {};
    }
    printMap(){
        console.log(this.thisEmptyObject);
    }
}
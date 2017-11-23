export default class UTILITIES {
    //text: string;
    // id: number;

    // constructor(text:string) {
    //     this.text = text;
    //     // this.id =id;
    // }

    public formatString(text: string) {
        var value = text.trim();
        return value;
    }

    static  speed = {slow: 600, fast: 400};
    static IdToHex(id: number) {
        var HexString = id.toString(16);
        if (HexString.length > 6) {
            HexString = HexString.substr(0, 6);
        }
        return `#${HexString}`;
    }

    public discoLights(bool: boolean = true, speed: number = UTILITIES.speed.slow) {
        if(bool){
            let p = setInterval(function () {
                let randNumber: number = Math.floor(Math.random() * 10e7);
                let hexString = UTILITIES.IdToHex(randNumber);
                console.log(hexString);
                document.body.style.cssText = `background-color: ${hexString}`;
            }, speed);
        }
    }
}

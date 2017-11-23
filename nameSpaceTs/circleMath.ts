namespace MyMath {
    //nested circle namespace
  export namespace Circle {
       //circle functions
       export function calculateCircumference(diameter: number) {
           return diameter * PI;
       }

       export function calculateRadius(diameter: number) {
           return diameter / 2;
       }

       export function calculatePI(circumference: number, diameter: number) {
           return circumference / diameter;
       }
       export function calculateArc(diameter: number) {
           return PI * diameter / 2;
       }
   }

}

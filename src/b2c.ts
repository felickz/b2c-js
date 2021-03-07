class _b2c { 
    //fields 
    claim:string;
    inputType:string;
  
    //constructor 
    constructor(claim:string,inputType:string) { 
       this.claim = claim;
       this.inputType = inputType;
       console.log(`Constructor: claim=${claim}`);   
    }  
 
    //functions 
    disp():void { 
       console.log(`Display: claim=${this.claim}, inputType=${this.inputType}`);
    } 

   hide():void {      
      $(document.getElementById(this.claim)).parents(`.${this.inputType}`).first().hide();
   }

   show():void {      
      $(document.getElementById(this.claim)).parents(`.${this.inputType}`).first().show();
   }
 }

 // Make it chainable
 function b2c(claim,inputType) {
    return new _b2c(claim,inputType); 
}
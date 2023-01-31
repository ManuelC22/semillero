import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultCalculatorComponent } from '../result-calculator/result-calculator.component';

@Component({
  selector: 'app-add-calculator',
  templateUrl: './add-calculator.component.html',
  styleUrls: ['./add-calculator.component.css']
})
export class AddCalculatorComponent implements OnInit {
  @ViewChild(ResultCalculatorComponent) resultComp:any;
  typeDiv:string ="";
  btnnumbers:Array<string> = ["1","2","3","+","4","5","6","-","7","8","9","*","0",".","=","/","R","G","B","C"];
  color:string = "";
  operator:string="";

  constructor() { }
  ngOnInit(): void {
  }

  clickBtn(val:any){
    switch(val) { 
      case "C": { 
        
      this.resultComp.result=""
      this.operator = "";
         break; 
      } 
      case "=": { 
        let p=this.resultComp.result.split(this.operator);
      this.resultComp.result=this.calculator(this.operator,eval(p[0]),eval(p[1]));
      this.operator = "";
         break; 
      } 
      case "+": { 
        if(this.operator != ""){
          alert("Operaccion ya asignada");
        }else{
          this.operator = "+";
          this.resultComp.result+=val;
        }
         break; 
      } 
      case "-": { 
        if(this.operator != ""){
          alert("Operaccion ya asignada");
        }else{
        this.operator = "-";
        this.resultComp.result+=val;
        }
         break; 
      }
      case "*": { 
        if(this.operator != ""){
          alert("Operaccion ya asignada");
        }else{
        this.operator = "*";
        this.resultComp.result+=val;
        }
        break; 
     }
     case "/": { 
      if(this.operator != ""){
        alert("Operaccion ya asignada");
      }else{
      this.operator = "/";
      this.resultComp.result+=val;
    }
      break; 
   } 
   case "R": { 
    this.color = "red";
    break; 
 } 
 case "G": { 
  this.color = "green";
  break; 
} 
case "B": { 
  this.color = "blue";
  break; 
} 
      default: { 
        this.resultComp.result+=val;
         break; 
      } 
   } 


  }

  getData(val:any){
console.log("El resultado es :"+val);
  }

  calculator(operator:string,val1:number,val2:number):number{
    let res:number = 0;
    console.log(operator);
    switch(operator) { 
      case "+": { 
         res = val1+val2;
         break; 
      } 
      case "-": { 
        res = val1-val2;
         break; 
      }
      case "*": { 
        res = val1*val2;
        break; 
     }
     case "/": { 
      res = val1/val2;
      break; 
   } 
      default: { 
         
         break; 
      } 
   } 
   return res;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiply-calculator',
  templateUrl: './multiply-calculator.component.html',
  styleUrls: ['./multiply-calculator.component.css']
})
export class MultiplyCalculatorComponent implements OnInit {
  calculadoraForm: FormGroup;
  result:string = "";
  constructor(formBuilder: FormBuilder) {   this.calculadoraForm = formBuilder.group(
    {
      number1 :["", Validators.required],
      number2 :["", Validators.required],
      number3 :["", Validators.required]
    }
  )
}

  ngOnInit(): void {
  }
  respuesta(){
    let v = this.calculadoraForm.value.number3;
    this.result = `El numero ${v} ${(this.entre0100(v))?"":"NO"} esta entre 0 y 100`;
    
  }

  suma(val1:number,val2:number):number{
    return val1+val2;
  }

  entre0100(val:number):boolean{
    return (val>=0 && val<=100)?true:false;
  }
}

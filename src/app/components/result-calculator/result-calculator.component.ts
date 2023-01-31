import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-calculator',
  templateUrl: './result-calculator.component.html',
  styleUrls: ['./result-calculator.component.css']
})
export class ResultCalculatorComponent implements OnInit {

  @Input() color:string="";
  @Output() valueResponse1: EventEmitter<string> = new EventEmitter();
  result:string="";
  clase:string="rojo";
  constructor() { }
  ngOnInit(): void {
  }
  sendData() { 
    this.valueResponse1.emit(this.result);
}

loopFor(){
  for (let i = 0; i < 30; i++) {
    console.log ("Block statement execution no." + i);
    if(i==10){
      break;
    }
  }
}

loopForOf(){
  let str = "Manuel 12344567";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}
}

loopForIn(){
  let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3
  //console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
}

loopWhile(){
  let i: number = 5;

while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}
}

loopDoWhile(){
  let i: number = 4;
  do {
      console.log("Block statement execution no." + i )
      i++;
  } while ( i < 4)
}





}

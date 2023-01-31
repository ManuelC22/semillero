export class Product {
   
    name:string="";
    code:number=0;
    characteristic:string ="";
    price:number=0;
    type?:boolean;
    status:boolean=false;

    constructor(name:string,price:number) {
        this.name = name;
        this.price = price 
    }
/*
    constructor(message: string) {
      this.greeting = message;
    }*/
  }
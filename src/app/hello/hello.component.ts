import { Component, OnInit } from '@angular/core';
//This Type Script(TS)File is used to implement  business logic for hello.component.html file
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  //properties
  title:string="My Dream App";
  name:string="Riya Gupta";
  age:number=22;
  salary:number=5000.00;


  imagePath:string="https://media.glassdoor.com/lst2x/fd/42/1a/37/coforge-campus.jpg";
  fname:string='Om';
  lname:string='Gupta';
  
  constructor() { }

  ngOnInit(): void {
  }

  //method with return type String.

  getFullName():string{

    return this.fname +' '+this.lname;
  }

  convertToDate(){
    const date=new Date();
    return date.toLocaleDateString();


  }

}

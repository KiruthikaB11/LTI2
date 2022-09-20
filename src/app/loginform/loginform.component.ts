import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
fname:string="Kiruthika";
lname:string="B";
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(loginform:any)
  {
    this.fname=loginform.value.firstname;
    this.lname=loginform.value.lastname;
    console.log("Name:"+this.fname+" "+this.lname);

  }

}
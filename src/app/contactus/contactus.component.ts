import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
Phone:string
Address:string
  constructor() { }

  ngOnInit(): void {
    this.Phone="9983451023";
    console.log(this.Phone)
    this.Address="Chennai";
    console.log(this.Address)

  }

}

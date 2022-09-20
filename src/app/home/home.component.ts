import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Name:string
  constructor() { }

  ngOnInit(): void {
    this.Name="Kiruthika";
    console.log(this.Name);
  }

}

import { Component } from '@angular/core';
//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularapp';
  Name:string="Kiruthika";
  Age:Number=20;
  PhoneNumber:string="9876543210";
  Photo:string="assets/images/bg2.jpg";
}

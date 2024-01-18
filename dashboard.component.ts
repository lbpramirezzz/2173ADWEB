import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  imageUrl:String="assets/lemuel.jpg";
imageW: number = 300;
imageH: number = 300;
}

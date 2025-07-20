import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openDemo() {
  window.open('https://www.youtube.com/watch?v=0LhBvp8qpro&t=6189s', '_blank');
}



}


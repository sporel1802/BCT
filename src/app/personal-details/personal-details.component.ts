import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {

//   Personal_info={
//   "name":"snehasish porel",
//   "email":"snehasishporel@gimal.com",
//   "phone":"82555564444",
//   "age":"21",
//   "collage":"NIT",
//   "dept":"ECE",
//   "text":"c++,c"
  

//  }
slideIndex = 0;

  slides: string[] = [
    'https://static.vecteezy.com/system/resources/previews/020/919/273/original/corporate-certificate-design-for-education-sports-or-office-appreciation-diploma-certificate-for-special-courses-or-occasions-business-success-appreciation-paper-and-frame-vector.jpg',
    'https://www.seoclerk.com/pics/000/907/980/be2665c7d9919265c29819d4edaa26e9.jpg',
    'https://image.shutterstock.com/shutterstock/photos/1510434776/display_1500/stock-vector-education-certificate-template-diploma-vector-luxury-modern-design-award-background-gift-1510434776.jpg',
    'https://static.vecteezy.com/system/resources/previews/024/767/221/original/circle-technology-certificate-template-design-free-vector.jpg'
  ];

  plusDivs(n: number) {
    this.slideIndex += n;
    if (this.slideIndex >= this.slides.length) this.slideIndex = 0;
    if (this.slideIndex < 0) this.slideIndex = this.slides.length - 1;
  }
}

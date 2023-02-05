import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    // $('.carousel').carousel({
    //   interval: 2000
    // })
  }
  slideConfig2 = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false
  };
  
  slideConfig4 = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":false,
    "autoplaySpeed":4000,
    "dots": false,
    "nav":false,

    // "infinite": false

    
    };

  slideConfig3 = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": false,
    "autoplaySpeed": 4000,
    "dots": true,
    "nav": false,
    "prevArrow": false,
    "nextArrow": false
    // "infinite": false


  };

}

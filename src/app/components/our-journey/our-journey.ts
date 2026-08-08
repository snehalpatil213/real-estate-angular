import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Journey {

  year: string;

  icon: string;

  title: string;

  description: string;

}

@Component({
  selector: 'app-our-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-journey.html',
  styleUrl: './our-journey.css'
})

export class OurJourney {

  timeline: Journey[] = [

    {
      year:'2010',
      icon:'bi-rocket-takeoff',
      title:'Company Started',
      description:'Started our journey with a vision to redefine luxury living.'
    },

    {
      year:'2013',
      icon:'bi-buildings',
      title:'First Project',
      description:'Successfully completed our first premium residential project.'
    },

    {
      year:'2016',
      icon:'bi-people',
      title:'100+ Projects',
      description:'Expanded across multiple cities with over 100 developments.'
    },

    {
      year:'2019',
      icon:'bi-heart',
      title:'5000+ Families',
      description:'Helped thousands of families find their dream homes.'
    },

    {
      year:'2022',
      icon:'bi-trophy',
      title:'Industry Awards',
      description:'Recognized for excellence, innovation and customer satisfaction.'
    },

    {
      year:'2025',
      icon:'bi-stars',
      title:'Towards The Future',
      description:'Continuing to build iconic communities for generations to come.'
    }

  ];

}
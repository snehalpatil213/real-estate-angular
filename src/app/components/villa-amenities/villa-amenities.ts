import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Amenity{

  icon:string;

  title:string;

  description:string;

}

@Component({
  selector:'app-villa-amenities',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./villa-amenities.html',
  styleUrl:'./villa-amenities.css'
})

export class VillaAmenities{

  amenities:Amenity[]=[

    {
      icon:'bi-water',
      title:'Infinity Pool',
      description:'Relax in our stunning infinity pool with breathtaking panoramic views.'
    },

    {
      icon:'bi-tree',
      title:'Private Garden',
      description:'Beautiful landscaped gardens offering peace, greenery and privacy.'
    },

    {
      icon:'bi-car-front',
      title:'Covered Parking',
      description:'Secure covered parking with spacious slots for multiple vehicles.'
    },

    {
      icon:'bi-activity',
      title:'Fitness Center',
      description:'Modern gym equipped with premium fitness machines and equipment.'
    },

    {
      icon:'bi-shield-check',
      title:'24×7 Security',
      description:'Round-the-clock professional security with smart surveillance.'
    },

    {
      icon:'bi-house-check',
      title:'Smart Home',
      description:'Advanced smart home automation for lighting, climate and security.'
    }

  ];

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Villa {

  id:number;

  title:string;

  location:string;

  image:string;

  beds:number;

  baths:number;

  area:string;

  price:string;

  badge:string;

}

@Component({
  selector: 'app-featured-villas',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./featured-villas.html',
  styleUrl:'./featured-villas.css'
})

export class FeaturedVillas {

  villas:Villa[]=[

    {
      id:1,
      title:'Sunset Luxury Villa',
      location:'Goa, India',
      image:'/image/villa-1.png',
      beds:4,
      baths:4,
      area:'4200 Sq.ft',
      price:'₹2.85 Cr',
      badge:'Luxury'
    },

    {
      id:2,
      title:'Palm Horizon Villa',
      location:'Lonavala, Maharashtra',
      image:'/image/villa-2.png',
      beds:5,
      baths:5,
      area:'5100 Sq.ft',
      price:'₹3.40 Cr',
      badge:'Premium'
    },

    {
      id:3,
      title:'Royal Sky Villa',
      location:'Alibaug, Maharashtra',
      image:'/image/villa-3.png',
      beds:6,
      baths:6,
      area:'6400 Sq.ft',
      price:'₹4.15 Cr',
      badge:'Exclusive'
    },

    {
      id:4,
      title:'Ocean Pearl Villa',
      location:'Kerala',
      image:'/image/villa-4.png',
      beds:4,
      baths:4,
      area:'4500 Sq.ft',
      price:'₹2.95 Cr',
      badge:'Beachfront'
    },

    {
      id:5,
      title:'Emerald Garden Villa',
      location:'Coorg, Karnataka',
      image:'/image/villa-5.png',
      beds:5,
      baths:5,
      area:'5300 Sq.ft',
      price:'₹3.75 Cr',
      badge:'Nature View'
    },

    {
      id:6,
      title:'Elite Crest Villa',
      location:'Hyderabad',
      image:'/image/villa-6.png',
      beds:6,
      baths:6,
      area:'7000 Sq.ft',
      price:'₹5.20 Cr',
      badge:'Ultra Luxury'
    }

  ];

  currentIndex=0;

  cardsToShow=3;

  constructor(){

    this.updateCardsToShow();

    window.addEventListener('resize',()=>{

      this.updateCardsToShow();

    });

  }

  updateCardsToShow(){

    if(window.innerWidth<768){

      this.cardsToShow=1;

    }

    else if(window.innerWidth<992){

      this.cardsToShow=2;

    }

    else{

      this.cardsToShow=3;

    }

  }

  nextSlide(){

    if(this.currentIndex<this.villas.length-this.cardsToShow){

      this.currentIndex++;

    }

    else{

      this.currentIndex=0;

    }

  }

  prevSlide(){

    if(this.currentIndex>0){

      this.currentIndex--;

    }

    else{

      this.currentIndex=this.villas.length-this.cardsToShow;

    }

  }

}
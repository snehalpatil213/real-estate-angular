import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plot {
  id: number;
  title: string;
  location: string;
  image: string;
  size: string;
  titleStatus: string;
  price: string;
  badge: string;
}

@Component({
  selector: 'app-featured-plots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-plots.html',
  styleUrl: './featured-plots.css'
})
export class FeaturedPlots {

  plots: Plot[] = [

    {
      id: 1,
      title: 'Premium Plot in Panhala',
      location: 'Panhala, Kolhapur',
      image: '/image/plot-1.png',
      size: '10 Guntha',
      titleStatus: 'NA Title',
      price: '₹18.50 Lakh',
      badge: 'Premium'
    },

    {
      id: 2,
      title: 'Residential Plot in Kagal',
      location: 'Kagal, Kolhapur',
      image: '/image/plot-2.png',
      size: '7 Guntha',
      titleStatus: 'Clear Title',
      price: '₹12.75 Lakh',
      badge: 'Residential'
    },

    {
      id: 3,
      title: 'Open Plot in Shiroli',
      location: 'Shiroli, Kolhapur',
      image: '/image/plot-3.png',
      size: '8 Guntha',
      titleStatus: 'NA Title',
      price: '₹15.90 Lakh',
      badge: 'Featured'
    },

    {
      id: 4,
      title: 'Budget Plot in Rajarampuri',
      location: 'Rajarampuri, Kolhapur',
      image: '/image/plot-4.png',
      size: '5 Guntha',
      titleStatus: 'Clear Title',
      price: '₹11.20 Lakh',
      badge: 'Budget'
    },

    {
      id: 5,
      title: 'Green Valley Plot',
      location: 'Rankala, Kolhapur',
      image: '/image/plot-5.png',
      size: '6 Guntha',
      titleStatus: 'Clear Title',
      price: '₹13.50 Lakh',
      badge: 'Nature View'
    },

    {
      id: 6,
      title: 'Highway Side Plot',
      location: 'Gokul Shirgaon, Kolhapur',
      image: '/image/plot-6.png',
      size: '9 Guntha',
      titleStatus: 'NA Title',
      price: '₹17.25 Lakh',
      badge: 'Investment'
    }

  ];

  currentIndex = 0;

  cardsToShow = 3;


  constructor() {

    this.updateCardsToShow();

    window.addEventListener('resize', () => {

      this.updateCardsToShow();

    });

  }


  updateCardsToShow(): void {

    if (window.innerWidth < 768) {

      this.cardsToShow = 1;

    }

    else if (window.innerWidth < 992) {

      this.cardsToShow = 2;

    }

    else {

      this.cardsToShow = 3;

    }

  }


  nextSlide(): void {

    if (
      this.currentIndex <
      this.plots.length - this.cardsToShow
    ) {

      this.currentIndex++;

    }

    else {

      this.currentIndex = 0;

    }

  }


  prevSlide(): void {

    if (this.currentIndex > 0) {

      this.currentIndex--;

    }

    else {

      this.currentIndex =
        this.plots.length - this.cardsToShow;

    }

  }

}
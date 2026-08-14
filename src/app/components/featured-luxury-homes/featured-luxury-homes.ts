import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LuxuryHome {
  id: number;
  title: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
  badge: string;
}

@Component({
  selector: 'app-featured-luxury-homes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-luxury-homes.html',
  styleUrl: './featured-luxury-homes.css'
})
export class FeaturedLuxuryHomes {

  luxuryHomes: LuxuryHome[] = [

    {
      id: 1,
      title: 'Royal Lake Villa',
      location: 'Mumbai, Maharashtra',
      image: '/image/luxury-home1.png',
      beds: 4,
      baths: 4,
      area: '3200 Sq.ft',
      price: '₹4.50 Cr',
      badge: 'Premium'
    },

    {
      id: 2,
      title: 'Green Valley Mansion',
      location: 'Pune, Maharashtra',
      image: '/image/luxury-home2.png',
      beds: 5,
      baths: 5,
      area: '4100 Sq.ft',
      price: '₹5.75 Cr',
      badge: 'Luxury'
    },

    {
      id: 3,
      title: 'Palm Crest Villa',
      location: 'Goa',
      image: '/image/luxury-home3.png',
      beds: 4,
      baths: 4,
      area: '3500 Sq.ft',
      price: '₹6.20 Cr',
      badge: 'Exclusive'
    },

    {
      id: 4,
      title: 'Hill View Estate',
      location: 'Lonavala, Maharashtra',
      image: '/image/luxury-home4.png',
      beds: 5,
      baths: 5,
      area: '4500 Sq.ft',
      price: '₹7.25 Cr',
      badge: 'Premium'
    },

    {
      id: 5,
      title: 'Garden Crown Villa',
      location: 'Bengaluru, Karnataka',
      image: '/image/luxury-home5.png',
      beds: 4,
      baths: 4,
      area: '3800 Sq.ft',
      price: '₹5.40 Cr',
      badge: 'Featured'
    },

    {
      id: 6,
      title: 'Sunset Bay Residence',
      location: 'Alibaug, Maharashtra',
      image: '/image/luxury-home6.png',
      beds: 5,
      baths: 6,
      area: '5200 Sq.ft',
      price: '₹8.50 Cr',
      badge: 'Ultra Luxury'
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

    } else if (window.innerWidth < 992) {

      this.cardsToShow = 2;

    } else {

      this.cardsToShow = 3;

    }

  }


  nextSlide(): void {

    if (
      this.currentIndex <
      this.luxuryHomes.length - this.cardsToShow
    ) {

      this.currentIndex++;

    } else {

      this.currentIndex = 0;

    }

  }


  prevSlide(): void {

    if (this.currentIndex > 0) {

      this.currentIndex--;

    } else {

      this.currentIndex =
        this.luxuryHomes.length - this.cardsToShow;

    }

  }

}
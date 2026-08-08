import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Apartment {
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
  selector: 'app-featured-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-apartments.html',
  styleUrl: './featured-apartments.css'
})
export class FeaturedApartments {

  apartments: Apartment[] = [

    {
      id: 1,
      title: 'Skyline Heights',
      location: 'Pune, Maharashtra',
      image: '/image/f-apartment.png',
      beds: 3,
      baths: 2,
      area: '1450 Sq.ft',
      price: '₹1.25 Cr',
      badge: 'For Sale'
    },

    {
      id: 2,
      title: 'Urban Nest',
      location: 'Mumbai, Maharashtra',
      image: '/image/f-apartment2.png',
      beds: 2,
      baths: 2,
      area: '1180 Sq.ft',
      price: '₹98 Lakh',
      badge: 'Ready To Move'
    },

    {
      id: 3,
      title: 'Royal Palm Residency',
      location: 'Bengaluru, Karnataka',
      image: '/image/f-apartment3.png',
      beds: 4,
      baths: 3,
      area: '1980 Sq.ft',
      price: '₹2.15 Cr',
      badge: 'Premium'
    },

    {
      id: 4,
      title: 'Green Valley Homes',
      location: 'Hyderabad, Telangana',
      image: '/image/f-apartment4.png',
      beds: 3,
      baths: 2,
      area: '1620 Sq.ft',
      price: '₹1.45 Cr',
      badge: 'Luxury'
    },

    {
      id: 5,
      title: 'Lake View Residency',
      location: 'Chennai, Tamil Nadu',
      image: '/image/f-apartment5.png',
      beds: 2,
      baths: 2,
      area: '1250 Sq.ft',
      price: '₹85 Lakh',
      badge: 'New Launch'
    },

    {
      id: 6,
      title: 'Elite Horizon',
      location: 'Noida, Uttar Pradesh',
      image: '/image/f-apartment6.png',
      beds: 4,
      baths: 3,
      area: '2250 Sq.ft',
      price: '₹2.80 Cr',
      badge: 'Featured'
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

    if (this.currentIndex < this.apartments.length - this.cardsToShow) {

      this.currentIndex++;

    } else {

      this.currentIndex = 0;

    }

  }

  prevSlide(): void {

    if (this.currentIndex > 0) {

      this.currentIndex--;

    } else {

      this.currentIndex = this.apartments.length - this.cardsToShow;

    }

  }

}
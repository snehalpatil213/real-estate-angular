import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [

    {
      name: 'Sarah Johnson',
      role: 'Property Buyer',
      image: '/image/client1.png',
      review: 'Buying our dream home through Horizon Properties was smooth, transparent and stress-free.'
    },

    {
      name: 'Michael Brown',
      role: 'Real Estate Investor',
      image: '/image/client2.png',
      review: 'Excellent service with professional advice and complete transparency throughout the process.'
    },

    {
      name: 'Emily Davis',
      role: 'Home Owner',
      image: '/image/client3.png',
      review: 'The team helped us find the perfect villa. Highly recommended for premium properties.'
    },

    {
      name: 'David Wilson',
      role: 'Apartment Buyer',
      image: '/image/client4.png',
      review: 'Professional consultants who understood our needs and found the ideal apartment.'
    },

    {
      name: 'Olivia Martin',
      role: 'Villa Buyer',
      image: '/image/client5.png',
      review: 'Transparent pricing and excellent support made our buying experience enjoyable.'
    },

    {
      name: 'James Anderson',
      role: 'Property Investor',
      image: '/image/client6.png',
      review: 'Great investment advice with deep market knowledge and honest recommendations.'
    },

    {
      name: 'Sophia Taylor',
      role: 'Home Owner',
      image: '/image/client7.png',
      review: 'Legal documentation was handled professionally. Everything was smooth and easy.'
    },

    {
      name: 'Daniel Thomas',
      role: 'Luxury Villa Buyer',
      image: '/image/client8.png',
      review: 'Fantastic customer support from beginning to end. Truly a five-star experience.'
    }

  ];

  visibleTestimonials: Testimonial[] = [];

  currentIndex = 0;

  cardsPerView = 3;

  private autoSlide: any;

  ngOnInit(): void {

    this.updateCards();

    this.startAutoSlide();

    this.handleResize();

    window.addEventListener('resize', this.handleResize);

  }

  ngOnDestroy(): void {

    clearInterval(this.autoSlide);

    window.removeEventListener('resize', this.handleResize);

  }

  handleResize = () => {

    if (window.innerWidth < 768) {

      this.cardsPerView = 1;

    }

    else if (window.innerWidth < 992) {

      this.cardsPerView = 2;

    }

    else {

      this.cardsPerView = 3;

    }

    this.updateCards();

  }

  updateCards() {

    this.visibleTestimonials = [];

    for (let i = 0; i < this.cardsPerView; i++) {

      const index = (this.currentIndex + i) % this.testimonials.length;

      this.visibleTestimonials.push(this.testimonials[index]);

    }

  }

  nextSlide() {

    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;

    this.updateCards();

  }

  previousSlide() {

    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length)
      % this.testimonials.length;

    this.updateCards();

  }

  goToSlide(index: number) {

    this.currentIndex = index;

    this.updateCards();

  }

  startAutoSlide() {

    this.autoSlide = setInterval(() => {

      this.nextSlide();

    }, 3500);

  }

}
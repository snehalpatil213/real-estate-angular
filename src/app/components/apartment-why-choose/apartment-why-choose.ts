import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-apartment-why-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartment-why-choose.html',
  styleUrl: './apartment-why-choose.css'
})
export class ApartmentWhyChoose {

  features: Feature[] = [

    {
      icon: 'bi-building',
      title: 'Premium Construction',
      description: 'Built with high-quality materials for lasting durability and modern elegance.'
    },

    {
      icon: 'bi-geo-alt',
      title: 'Prime Location',
      description: 'Located near schools, hospitals, shopping malls and major city attractions.'
    },

    {
      icon: 'bi-wallet2',
      title: 'Affordable Pricing',
      description: 'Luxury apartments with flexible payment plans and competitive pricing.'
    },

    {
      icon: 'bi-shield-check',
      title: '24×7 Security',
      description: 'Advanced CCTV surveillance with trained security staff available day and night.'
    },

    {
      icon: 'bi-tree',
      title: 'Green Environment',
      description: 'Beautiful landscaped gardens, open spaces and a peaceful natural atmosphere.'
    },

    {
      icon: 'bi-handshake',
      title: 'Trusted Builder',
      description: 'Years of excellence and thousands of happy homeowners who trust our quality.'
    }

  ];

}
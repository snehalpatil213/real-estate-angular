import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LuxuryBenefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-luxury-living',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-luxury-living.html',
  styleUrl: './why-luxury-living.css'
})
export class WhyLuxuryLiving {

  benefits: LuxuryBenefit[] = [

    {
      icon: 'bi-building',
      title: 'Elegant Design',
      description: 'Thoughtfully designed spaces that combine modern architecture with timeless elegance.'
    },

    {
      icon: 'bi-geo-alt',
      title: 'Prime Locations',
      description: 'Exclusive luxury homes situated in sought-after and well-connected locations.'
    },

    {
      icon: 'bi-gem',
      title: 'Premium Quality',
      description: 'High-quality materials, sophisticated finishes and attention to every detail.'
    },

    {
      icon: 'bi-shield-lock',
      title: 'Complete Privacy',
      description: 'Enjoy a peaceful and private living experience designed around your comfort.'
    }

  ];

}
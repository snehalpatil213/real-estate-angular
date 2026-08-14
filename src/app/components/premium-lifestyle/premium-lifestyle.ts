import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Amenity {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-premium-lifestyle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './premium-lifestyle.html',
  styleUrl: './premium-lifestyle.css'
})
export class PremiumLifestyle {

  amenities: Amenity[] = [

    {
      icon: 'bi-water',
      title: 'Swimming Pool',
      description: 'Relax and unwind in our beautifully designed luxury swimming pool.'
    },

    {
      icon: 'bi-activity',
      title: 'Gym & Fitness',
      description: 'Modern fitness center with premium equipment for a healthy lifestyle.'
    },

    {
      icon: 'bi-tree',
      title: 'Landscaped Garden',
      description: 'Beautiful green gardens and peaceful walking areas for residents.'
    },

    {
      icon: 'bi-car-front',
      title: 'Parking Area',
      description: 'Spacious covered parking with dedicated visitor parking facilities.'
    },

    {
      icon: 'bi-shield-check',
      title: '24×7 Security',
      description: 'Round-the-clock security with trained staff and gated entrance.'
    },

    {
      icon: 'bi-balloon',
      title: 'Kids Play Area',
      description: 'Safe and exciting outdoor play area specially designed for children.'
    },

    {
      icon: 'bi-camera-video',
      title: 'CCTV Surveillance',
      description: 'Advanced CCTV monitoring throughout the entire residential complex.'
    },

    {
      icon: 'bi-lightning-charge',
      title: 'Power Backup',
      description: 'Uninterrupted power backup for common areas and essential services.'
    }

  ];

}
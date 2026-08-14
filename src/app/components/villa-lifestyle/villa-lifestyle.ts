import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VillaFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-villa-lifestyle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './villa-lifestyle.html',
  styleUrl: './villa-lifestyle.css'
})
export class VillaLifestyle {

  features: VillaFeature[] = [

    {
      icon: 'bi-leaf',
      title: 'Spacious Living',
      description: 'Expansive layouts with open spaces designed for luxurious comfort.'
    },

    {
      icon: 'bi-brightness-high',
      title: 'Private Retreat',
      description: 'Your own private space to relax, unwind and reconnect with nature.'
    },

    {
      icon: 'bi-shield-check',
      title: 'Secure Living',
      description: '24/7 security and gated communities for total peace of mind.'
    },

    {
      icon: 'bi-tree',
      title: 'Green Surroundings',
      description: 'Surrounded by lush greenery for a calm and refreshing atmosphere.'
    }

  ];

}
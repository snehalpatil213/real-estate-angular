import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {

  icon: string;

  number: string;

  title: string;

  description: string;

  dark: boolean;

}

@Component({
  selector: 'app-company-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-stats.html',
  styleUrl: './company-stats.css'
})

export class CompanyStats {

  stats: Stat[] = [

    {
      icon: 'bi-award',
      number: '15+',
      title: 'Years of Experience',
      description: 'Delivering excellence in luxury real estate for over 15 years.',
      dark: true
    },

    {
      icon: 'bi-buildings',
      number: '250+',
      title: 'Premium Projects',
      description: 'Successfully completed premium residential and commercial developments.',
      dark: false
    },

    {
      icon: 'bi-people',
      number: '5000+',
      title: 'Happy Families',
      description: 'Thousands of families have trusted us with their dream homes.',
      dark: true
    },

    {
      icon: 'bi-hand-thumbs-up',
      number: '98%',
      title: 'Client Satisfaction',
      description: 'A proven record of customer happiness and long-term relationships.',
      dark: false
    }

  ];

}
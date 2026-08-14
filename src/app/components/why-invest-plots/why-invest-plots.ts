import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InvestmentBenefit {

  icon: string;

  title: string;

  description: string;

}

@Component({
  selector: 'app-why-invest-plots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-invest-plots.html',
  styleUrl: './why-invest-plots.css'
})

export class WhyInvestPlots {

  benefits: InvestmentBenefit[] = [

    {
      icon: 'bi-graph-up-arrow',
      title: 'High Appreciation',
      description: 'Land value can grow significantly over time and provide better long-term returns.'
    },

    {
      icon: 'bi-shield-check',
      title: 'Secure Investment',
      description: 'Land is a tangible asset that offers stability and long-term investment security.'
    },

    {
      icon: 'bi-house-heart',
      title: 'Build Your Dream',
      description: 'Create your dream home exactly the way you want with complete design freedom.'
    },

    {
      icon: 'bi-cash-coin',
      title: 'Better Returns',
      description: 'Plots offer strong potential for long-term growth compared with many other assets.'
    }

  ];

}
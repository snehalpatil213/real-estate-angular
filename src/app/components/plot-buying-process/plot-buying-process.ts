import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {

  number: string;

  icon: string;

  title: string;

  description: string;

}

@Component({
  selector: 'app-plot-buying-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plot-buying-process.html',
  styleUrl: './plot-buying-process.css'
})
export class PlotBuyingProcess {

  steps: ProcessStep[] = [

    {
      number: '01',
      icon: 'bi-search',
      title: 'Explore Plots',
      description: 'Browse plots available in your preferred location.'
    },

    {
      number: '02',
      icon: 'bi-file-earmark-check',
      title: 'Verify Documents',
      description: 'Check title, approvals and important property documents.'
    },

    {
      number: '03',
      icon: 'bi-geo-alt',
      title: 'Site Visit & Select',
      description: 'Visit the location and choose the plot that suits you.'
    },

    {
      number: '04',
      icon: 'bi-house-heart',
      title: 'Own Your Plot',
      description: 'Complete the process and take the first step toward your dream home.'
    }

  ];

}
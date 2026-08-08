import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {

  icon: string;

  text: string;

}

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-vision.html',
  styleUrl: './mission-vision.css'
})

export class MissionVision {

  mission: Feature[] = [

    {
      icon:'bi-shield-check',
      text:'Deliver exceptional quality in every project.'
    },

    {
      icon:'bi-lightbulb',
      text:'Innovate with modern design and smart solutions.'
    },

    {
      icon:'bi-people',
      text:'Build trust through transparency and reliability.'
    }

  ];

  vision: Feature[] = [

    {
      icon:'bi-award',
      text:'Become the most trusted real estate brand.'
    },

    {
      icon:'bi-tree',
      text:'Promote sustainable and eco-friendly developments.'
    },

    {
      icon:'bi-heart',
      text:'Create communities where families thrive.'
    }

  ];

}
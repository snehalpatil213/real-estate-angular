
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {

  icon:string;

  title:string;

  description:string;

}

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-values.html',
  styleUrl: './our-values.css'
})

export class OurValues {

  values:Value[] = [

    {

      icon:'bi-shield-check',

      title:'Integrity',

      description:'We believe in honesty, transparency and ethical practices in every interaction.'

    },

    {

      icon:'bi-lightbulb',

      title:'Innovation',

      description:'We embrace creativity and modern technology to design better spaces for tomorrow.'

    },

    {

      icon:'bi-award',

      title:'Excellence',

      description:'We are committed to delivering the highest quality in every project we undertake.'

    },

    {

      icon:'bi-people',

      title:'Customer First',

      description:'Our customers are at the heart of everything we do. Their trust inspires us every day.'

    }

  ];

}
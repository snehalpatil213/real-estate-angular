import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoryFeature {
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-about-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-story.html',
  styleUrl: './about-story.css'
})
export class AboutStory {

  features: StoryFeature[] = [

    {
      icon: 'bi-award',
      title: '15+ Years',
      subtitle: 'Of Experience'
    },

    {
      icon: 'bi-building',
      title: '250+ Projects',
      subtitle: 'Completed Successfully'
    },

    {
      icon: 'bi-people',
      title: '5000+ Families',
      subtitle: 'Trust Us & Are Happy'
    }

  ];

}
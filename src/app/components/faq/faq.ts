import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

  activeIndex = 0;

  faqs = [
    {
      question: 'Is this property RERA approved?',
      answer:
        'Yes, all our projects are RERA approved. We ensure complete transparency and follow all regulatory guidelines to provide you with a secure investment.',
      icon: 'bi-award'
    },
    {
      question: 'Do you provide loan assistance?',
      answer:
        'Yes. We work with leading banks and financial institutions to help you secure the best home loan options.',
      icon: 'bi-bank'
    },
    {
      question: 'What is the expected rental return?',
      answer:
        'Rental returns vary depending on the property and location, but premium properties generally offer attractive long-term returns.',
      icon: 'bi-graph-up-arrow'
    },
    {
      question: 'Can NRIs buy property in India?',
      answer:
        'Yes. NRIs can purchase residential and commercial properties in India according to RBI guidelines.',
      icon: 'bi-people'
    },
    {
      question: 'How do I schedule a site visit?',
      answer:
        'Simply contact our sales team or click the consultation button to schedule your visit.',
      icon: 'bi-calendar-check'
    },
    {
      question: 'What documents are required?',
      answer:
        'Basic identity proof, PAN card, address proof and other applicable documents are required for booking.',
      icon: 'bi-file-earmark-text'
    }
  ];

  toggleFAQ(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

}
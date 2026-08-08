import { Component } from '@angular/core';

import { PageBanner } from '../../components/page-banner/page-banner';
import { ContactForm } from '../../components/contact-form/contact-form';
import { ContactMap } from '../../components/contact-map/contact-map';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageBanner,
    ContactForm,
    ContactMap
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
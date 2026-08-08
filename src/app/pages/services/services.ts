import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { PageBanner } from '../../components/page-banner/page-banner';
import { WhatWeOffer } from '../../components/what-we-offer/what-we-offer';
import { DiscoverProperty } from '../../components/discover-property/discover-property';
import { PropertyConsultation } from '../../components/property-consultation/property-consultation';
import { Testimonials} from '../../components/testimonials/testimonials';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [Navbar,PageBanner, WhatWeOffer,DiscoverProperty, PropertyConsultation,Testimonials, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {}
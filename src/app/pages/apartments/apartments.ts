import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { FeaturedApartments } from '../../components/featured-apartments/featured-apartments';
import { LuxuryAmenities } from '../../components/luxury-amenities/luxury-amenities';
import { ApartmentWhyChoose } from '../../components/apartment-why-choose/apartment-why-choose';


@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [
    PageBanner,  FeaturedApartments,  LuxuryAmenities,  ApartmentWhyChoose  
  ],
  templateUrl: './apartments.html',
  styleUrl: './apartments.css'
})
export class Apartments {

}
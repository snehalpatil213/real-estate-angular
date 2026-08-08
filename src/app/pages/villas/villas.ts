import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { FeaturedVillas } from '../../components/featured-villas/featured-villas';
import { VillaAmenities } from '../../components/villa-amenities/villa-amenities';

@Component({
  selector: 'app-villas',
    standalone: true,
  imports: [ PageBanner,   FeaturedVillas,  VillaAmenities],
  templateUrl: './villas.html',
  styleUrl: './villas.css',
})
export class Villas {}

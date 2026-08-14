import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { FeaturedVillas } from '../../components/featured-villas/featured-villas';
import { VillaAmenities } from '../../components/villa-amenities/villa-amenities';
import { VillaLifestyle } from '../../components/villa-lifestyle/villa-lifestyle';

@Component({
  selector: 'app-villas',
    standalone: true,
  imports: [ PageBanner,   FeaturedVillas,  VillaAmenities, VillaLifestyle],
  templateUrl: './villas.html',
  styleUrl: './villas.css',
})
export class Villas {}

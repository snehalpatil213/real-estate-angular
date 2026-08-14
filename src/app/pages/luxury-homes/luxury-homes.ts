import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { FeaturedLuxuryHomes } from '../../components/featured-luxury-homes/featured-luxury-homes';
import { PremiumLifestyle } from '../../components/premium-lifestyle/premium-lifestyle';
import { WhyLuxuryLiving } from '../../components/why-luxury-living/why-luxury-living';

@Component({
  selector: 'app-luxury-homes',
  standalone: true,
  imports: [
    PageBanner,FeaturedLuxuryHomes,  PremiumLifestyle, WhyLuxuryLiving
  ],
  templateUrl: './luxury-homes.html',
  styleUrl: './luxury-homes.css'
})
export class LuxuryHomes {

}
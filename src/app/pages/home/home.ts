import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { WhyChooseUs } from '../../components/why-choose-us/why-choose-us';
import { FeaturedProperties } from '../../components/featured-properties/featured-properties';
import { InvestmentBenefits } from '../../components/investment-benefits/investment-benefits';
import { Faq } from '../../components/faq/faq';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Services,
    WhyChooseUs,
    FeaturedProperties,
    InvestmentBenefits,
    Faq,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
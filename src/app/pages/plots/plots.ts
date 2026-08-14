import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { FeaturedPlots } from '../../components/featured-plots/featured-plots';
import { WhyInvestPlots } from '../../components/why-invest-plots/why-invest-plots';
import { PlotBuyingProcess } from '../../components/plot-buying-process/plot-buying-process';

@Component({
  selector: 'app-plots',
  imports: [ PageBanner,     FeaturedPlots,  WhyInvestPlots, PlotBuyingProcess],
  templateUrl: './plots.html',
  styleUrl: './plots.css',
})
export class Plots {}

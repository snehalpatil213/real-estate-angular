import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBanner } from '../../components/page-banner/page-banner';
import { AboutStory } from '../../components/about-story/about-story';
import { CompanyStats } from '../../components/company-stats/company-stats';
import { MissionVision } from '../../components/mission-vision/mission-vision';
import { OurJourney } from '../../components/our-journey/our-journey';
import { OurValues } from '../../components/our-values/our-values';

@Component({
  selector: 'app-about',
  imports: [RouterLink,  PageBanner,   AboutStory,  CompanyStats, MissionVision,  OurJourney,   OurValues],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}

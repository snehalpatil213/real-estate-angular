import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.css'
})
export class PageBanner {

  title = input('');
  subtitle = input('');
  background = input('');

}
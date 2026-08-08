import { Component } from '@angular/core';

import { PageBanner } from '../../components/page-banner/page-banner';
import { BlogSection } from '../../components/blog-section/blog-section';
import { FeaturedBlog } from '../../components/featured-blog/featured-blog';
import { Newsletter } from '../../components/newsletter/newsletter';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    PageBanner,
    BlogSection,
    FeaturedBlog,
    Newsletter
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})

export class Blog {

}
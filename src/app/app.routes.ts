import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';
import { About } from './pages/about/about';


import { Apartments } from './pages/apartments/apartments';
import { Villas} from './pages/villas/villas';
import { LuxuryHomes } from './pages/luxury-homes/luxury-homes';
import { Commercial } from './pages/commercial/commercial';
import { Plots } from './pages/plots/plots';




export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
  path: 'about',
  component: About
},
  {
    path: 'services',
    component: Services
  },
 {
    path: 'contact',
    component: Contact
  },
  {
    path:'blog',
    component:Blog
  },
  {
    path: 'apartments',
    component: Apartments
  },

  {
    path: 'villas',
    component: Villas
  },

  {
    path: 'luxury-homes',
    component: LuxuryHomes
  },

  {
    path: 'commercial',
    component: Commercial
  },

  {
    path: 'plots',
    component: Plots
  }



];

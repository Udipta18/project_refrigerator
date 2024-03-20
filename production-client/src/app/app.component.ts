import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardBodyComponent } from './card-body/card-body.component';
import { ReviewComponent } from './review/review.component';
import { FixedSideNavComponent } from './fixed-side-nav/fixed-side-nav.component';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsTickerComponent } from './news-ticker/news-ticker.component';
import { SliderComponent } from './slider/slider.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardBodyComponent,ReviewComponent,FixedSideNavComponent,NavbarComponent,FooterComponent,NewsTickerComponent,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'production-client';
}

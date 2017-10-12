import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../app/navbar/navbar.component'
import { FooterComponent } from '../app/footer/footer.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

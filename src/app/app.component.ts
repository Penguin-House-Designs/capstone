import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../app/navbar/navbar.component'
import { FooterComponent } from '../app/footer/footer.component'
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onDeactivate() {
    // document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    window.scrollTo(0, 0)
  }

}

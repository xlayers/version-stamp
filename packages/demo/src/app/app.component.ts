import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'xlayers-builders-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  version = environment.version;
}

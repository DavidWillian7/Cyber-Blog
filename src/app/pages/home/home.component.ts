import { Component } from '@angular/core';
import { datasStatics } from 'src/app/data/datasStatics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data = [
    datasStatics[0],
    datasStatics[1],
    datasStatics[2],
    datasStatics[3],
    datasStatics[4],
    datasStatics[5]
  ] ;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = '28-days-on-angular';

  cities = ['Caracas', 'Bogota', 'Madrid'];
  name!: string;
  selection!: string;

  onCityClicked(city: string): void{
    console.log('city->' + city);
    this.selection = city;
  }

  onClear(){
    this.selection = "";
  }
}

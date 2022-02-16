import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  title = '28-days-on-angular';

  cities = ['Caracas', 'Bogota', 'Madrid'];
  name!: string;
  selection!: string;

  ngOnChanges(){
    console.log('On Changes');
  }

  ngOnInit(){
    console.log('On Init');
  }
  onCityClicked(city: string): void{
    console.log('city->' + city);
    this.selection = city;
  }

  onClear(){
    this.selection = "";
  }
}

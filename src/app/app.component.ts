import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent {
  searchCar = "";
   cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
   ];

   addCarToList(carName: string){
     this.cars.push({
       name: carName,
       isSold: false
     });
   }



   



}

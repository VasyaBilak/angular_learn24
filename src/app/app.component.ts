import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent  {
  answers = [{
    type: 'yes',
    text: 'Так'
  },{
    type: 'no',
    text: 'Ні'
  }];  

   }



   





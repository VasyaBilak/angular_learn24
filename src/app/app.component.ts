import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


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

  submitForm(form: NgForm){
    console.log('Submited!', form);
  }

   }



   





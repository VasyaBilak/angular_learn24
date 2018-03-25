import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent  {

  @ViewChild('form') form: NgForm;
  answers = [{
    type: 'yes',
    text: 'Так'
  },{
    type: 'no',
    text: 'Ні'
  }];  

  submitForm(){
    console.log('Submited!', this.form);
  }

   }



   





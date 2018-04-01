import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-invalid.ng-touched {
      border: 1px solid red;
    }
  `]
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

  defaultAnswer = 'no';
  defaultCountry = 'us';

  formData = {};
  isSubmited = false;


  addRandEmail(){
    const randEmail = 'wfm@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({
      user: {email: randEmail}
    });

  }
  
  submitForm(){
    this.isSubmited = true;
    console.log('Submited!', this.form);
    this.formData = this.form.value;
    this.form.reset();
  }

   }



   





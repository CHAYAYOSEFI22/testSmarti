import { Component } from '@angular/core';
import { User } from './user/user';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-client';
  onSubmit(form: NgForm){
  	console.log(form.value);
  }
}

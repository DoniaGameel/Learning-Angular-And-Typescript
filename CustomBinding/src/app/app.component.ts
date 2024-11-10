import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomBinding';
  show = true;
  color = 'red';
  today = Date();
  getName(name: string | number) {
    console.log(name)
  }
  users = ["Donia", "Heba", "Sara"];

  childData = 10;

  updateData(item: string) {
    console.log(item);
  }

  data = '';

  userData = {
    name: 'donia donia',
    age: 20
  }

  loginUser(item: any) {
    console.log(item)
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('default password')
  })

  loginUserReactive() {
    console.log(this.loginForm.value)
  }

  get user() {
    return this.loginForm.get('user');
  }
}

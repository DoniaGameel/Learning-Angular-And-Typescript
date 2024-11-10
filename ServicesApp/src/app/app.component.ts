import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServicesApp';
  memberData = [
    { name: 'Peter', email: 'peter@gmail.com' },
    { name: 'Sam', email: 'sam@gmail.com' },
    { name: 'Bruce', email: 'bruce@gmail.com' },
    { name: 'Tony', email: 'bruce@gmail.com' },
  ]
  usersData: any;
  constructor(userData: UserdataService) {
    console.log(userData.users())
    this.usersData = userData.users();
  }
}

import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../services/userdata.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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

  ngOnInit(): void {
  }

}

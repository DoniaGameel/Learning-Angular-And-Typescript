import { Component } from '@angular/core';
import { UsersDataService } from "./services/users-data.service"
interface dataType{
  name: string,
  indian: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-App';
  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      console.log(data)
    })
  }

  getUserFormData(data: any) {
    this.userData.saveUsers(data).subscribe((res)=>{console.log("res",res)})
  }

  // Using Models to enforce data types
  getData() {
    const data: dataType[] = [
      {name:"donia", indian:true,}
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any = [];
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get("https://reqres.in/api/users?page=1")
    .subscribe((result: any) => {
      console.log(result);
      this.userList = result.data;
    });
  }

  saveInLs(user: any) {
    console.log(user);
    localStorage.setItem(user.first_name, JSON.stringify(user));
  }

  readFromLs(first_name: any) {
    const user = localStorage.getItem(first_name);
    console.log(JSON.parse(user || '{}'));
  }

  removeFromLs(first_name: string) {
    localStorage.removeItem(first_name);
  }

  clearLs() {
    localStorage.clear();
  }

}

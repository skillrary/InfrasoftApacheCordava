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

}

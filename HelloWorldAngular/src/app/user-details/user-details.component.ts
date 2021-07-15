import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
    const id = this.activatedRoute.snapshot.params.id;
    this.loadUserDetails(id);
  }

  loadUserDetails(id: string) {
    this.api.get(environment.base_url + 'users/' + id)
    .subscribe(result => {
      console.log(result);
      this.user = result;
    });
  }

  ngOnInit(): void {
  }

}

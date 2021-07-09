import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  doLike() {
    console.log("Like button is pressed");
  }

  textBoxFocusOut() {
    console.log('textBoxFocusOut blured');
  }

}

import { Component, OnInit } from '@angular/core';
import { ViewUploadsService } from '../services/view-uploads.service';


@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  private news : import("./upload").Video;

  constructor(private _newsService : ViewUploadsService) { }

  ngOnInit() {

    this._newsService.getNews()
    .subscribe(data =>{
        console.log(data);
        this.news = data;
      });
  }

}

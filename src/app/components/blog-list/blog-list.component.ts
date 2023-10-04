import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  allBlogs: any;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.blogDataService.getAllBlogs().subscribe((response) => {
      this.allBlogs = response;
    });
  }
}

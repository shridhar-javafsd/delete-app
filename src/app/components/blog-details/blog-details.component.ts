import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogData: any = '';

  constructor(
    private route: ActivatedRoute,
    private blogDataService: BlogDataService
  ) { }

  ngOnInit() {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blogDataService.getBlogById(blogId).subscribe((response) => {
      this.blogData = response;
    });
  }
}

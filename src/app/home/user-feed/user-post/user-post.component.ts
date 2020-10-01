import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  @Input() post: Post;
  postLiked: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postLiked = this.post.likedBy.includes("Admin");
  }

  viewPostDetails(id: number) {
    this.router.navigate(['post', id], { relativeTo: this.activatedRoute });
  }

  onAlterLike() {
    this.postLiked = !this.postLiked;
    if (this.postLiked) {
      this.post.likes++;
      this.post.likedBy.push("Admin");
    }
    else {
      this.post.likes--;
      this.post.likedBy.splice(this.post.likedBy.indexOf("Admin"),1);
    }

    console.log(this.post);
  }

}

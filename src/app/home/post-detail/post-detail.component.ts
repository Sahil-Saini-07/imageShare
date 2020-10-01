import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPostService } from 'src/app/services/user-post.service';
import { Post } from 'src/app//models/post.model';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/models/comment.model';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  activePost: Post;
  activePostId: number;

  constructor(private activatedRoute: ActivatedRoute,
    private userPostService: UserPostService) { }

  ngOnInit(): void {
    this.activePostId = +this.activatedRoute.snapshot.params["id"];
    this.activePost = this.userPostService.getPost(this.activePostId);
    console.log(this.activePost.comments);
  }

  onNewComment(commentForm:NgForm){
    const comment = new Comment("Admin", commentForm.value.text);
    this.activePost.addComment(comment);
  }
}

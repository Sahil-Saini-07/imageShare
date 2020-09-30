import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPostService } from '../user-post.service';
import { Post } from '../user-feed/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  editMode: boolean;
  addPostForm: FormGroup;
  activePostId: number;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, private userPostService: UserPostService) { }

  ngOnInit(): void {
    this.activePostId = this.activatedRoute.snapshot.params["id"];
    this.editMode = this.activePostId ? true : false;
    this.initForm();
  }

  initForm() {
    let postCaption = "";
    let imageUrl = "";
    if (this.editMode) {
      const post = this.userPostService.getPost(this.activePostId);
      postCaption = post.caption;
      imageUrl = post.imageUrl;
    }

    this.addPostForm = new FormGroup({
      "caption": new FormControl(postCaption, Validators.required),
      "imageUrl": new FormControl(imageUrl, Validators.required)
    });
  }

  onPublish() {

    if (this.editMode) {
      const post = new Post(this.activePostId, "Sahil", this.addPostForm.value.caption,
      this.addPostForm.value.imageUrl);
      this.userPostService.updatePost(this.activePostId, post);
    }
    else {
      const post = new Post(this.userPostService.getNextIndex(), "Sahil", 
      this.addPostForm.value.caption,
      this.addPostForm.value.imageUrl);
      this.userPostService.addPost(post);

    }
    this.router.navigate(['']);
  }

  onReset() {
    this.addPostForm.reset();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post.model';
import { UserPostService } from '../user-post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSubscription = new Subscription();

  constructor(private userPostService: UserPostService) { }

  ngOnInit(): void {
    this.posts = this.userPostService.getPosts();
    this.postSubscription = this.userPostService.postUpdated.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}

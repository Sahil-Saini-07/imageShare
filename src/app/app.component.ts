import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './home/data-storage.service';
import { Post } from './home/user-feed/post.model';
import { UserPostService } from './home/user-post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ImageShare';

  constructor(private dataStorageService: DataStorageService,
    private userPostService: UserPostService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.userPostService.initializePosts(posts != null ? posts : []);``
      }
    );
  }

}

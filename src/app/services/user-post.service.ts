import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { DataStorageService } from'./data-storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserPostService {
    postUpdated = new Subject<Post[]>();
    posts: Post[] = [];

    constructor(private dataStorageService:DataStorageService) { }

    getNextIndex() {
        return this.posts.length;
    }

    getPosts() {
        return this.posts.slice();
    }

    getPost(index: number) {
        return this.posts[index];
    }

    addPost(post:Post) {
        this.posts.push(post);
        this.postUpdated.next(this.posts.slice());
        this.dataStorageService.savePosts(this.posts);
    }

    updatePost(index:number, post:Post) {
        this.posts[index] = post;
        this.postUpdated.next(this.posts.slice());
        this.dataStorageService.savePosts(this.posts);
    }

    initializePosts(posts:Post[]) {
        this.posts = posts;
        this.postUpdated.next(this.posts.slice());
    }
}
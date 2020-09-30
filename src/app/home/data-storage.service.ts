import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Post } from './user-feed/post.model';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private httpClient: HttpClient) {
    }

    savePosts(posts: Post[]) {
        this.httpClient.put<Post[]>("https://imageshare-web-app.firebaseio.com/posts.json", posts)
            .subscribe((response) => {
                console.log(response);
            })
    }

    fetchPosts() {
        return this.httpClient.get<Post[]>("https://imageshare-web-app.firebaseio.com/posts.json")
            .pipe(
                map((response: any) => {
                    return response.map((post: any) => {
                        return new Post(post.id, post.username, post.caption, post.imageUrl);
                    })
                })
            );
    }
}
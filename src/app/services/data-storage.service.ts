import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';

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
                    return response.map((object: any) => {
                        let post = new Post(object.id, object.username, object.caption, object.imageUrl);
                        post.likedBy = object.likedBy? object.likedBy : [];
                        post.likes = object.likes? object.likes : 0;
                        post.comments = object.comments? object.comments: [];
                        return post;
                    })
                })
            );
    }
}
import { Comment } from './comment.model';

export class Post {
    id:number;
    username:string;
    caption:string;
    imageUrl:string;
    likes?:number;
    likedBy:string[];
    comments?:Comment[];

    constructor(id:number, name:string, caption:string, imageUrl:string) {
        this.id = id;
        this.username= name;
        this.caption = caption;
        this.imageUrl= imageUrl;
        this.likes = 0;
        this.likedBy  = [];
        this.comments = [];
    }

    addComment(comment:Comment) {
        this.comments.push(comment);
        console.log(this.comments);
    }
}
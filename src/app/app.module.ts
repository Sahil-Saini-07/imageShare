import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditPostComponent } from './home/edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './home/post-detail/post-detail.component';
import { UserDetailComponent } from './home/user-detail/user-detail.component';
import { UserFeedComponent } from './home/user-feed/user-feed.component';
import { UserPostComponent } from './home/user-feed/user-post/user-post.component';
import { CommentComponent } from './home/post-detail/comment/comment.component';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'post/new', component: EditPostComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'post/:id/edit', component: EditPostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailComponent,
    UserFeedComponent,
    UserPostComponent,
    HomeComponent,
    PostDetailComponent,
    EditPostComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

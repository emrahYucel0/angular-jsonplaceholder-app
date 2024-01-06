import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../entities/entity';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,CommentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  constructor(private postService:PostService){}
  ngOnInit(): void {
    this.getAll()
  }

  posts:Post[] = [];

  getAll(){
    this.postService.findAll().subscribe(res=>{
      this.posts=res
    },error=>{
      this.posts = []
    })
  }
}

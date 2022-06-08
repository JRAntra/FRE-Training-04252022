import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/News';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  error = "";
  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

  postForm = new FormGroup({
    news: new FormControl('')
  })

  submit() {
    let valid: number = 1;
    if (this.postForm.value.news == "") {
      valid = 0;
      this.error = 'Your post is empty';
    }

    if (valid == 1) {
      const newPost = {
        publishedTime: new Date(),
        content: { text: this.postForm.value.news}
      };

      this.service.postNews(newPost).subscribe((data) => {});
      this.error = "Posted";
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'app/artwork.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  posts: any[];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.artworkService.getAllPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }

}

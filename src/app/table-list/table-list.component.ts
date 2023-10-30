import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'app/artwork.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  artworks: any[];
  artists: any[];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.artworkService.getAllArtworks().subscribe((data) => {
      this.artworks = data;
    });
    this.artworkService.getAllArtworks().subscribe((data) => {
      this.artists = data;
      console.log(data);
    });
  }

}

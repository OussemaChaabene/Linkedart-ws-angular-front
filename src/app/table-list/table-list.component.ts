import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'app/artwork.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  artworks: any[];
  artworkById: any;
  artworkId: string = '';

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.artworkService.getAllArtworks().subscribe((data) => {
      this.artworks = data;
    });

  }
  onSubmit() {
    // Check if artworkId is not empty before making the service call
    if (this.artworkId) {
        this.artworkService.getArtworkById(this.artworkId).subscribe((artworkData) => {
            console.log('Artwork Data:', artworkData);
        });
    }
}

}

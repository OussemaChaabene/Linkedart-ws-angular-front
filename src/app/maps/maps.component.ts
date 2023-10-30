import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'app/artwork.service';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    artists: any[];

    constructor(private artworkService: ArtworkService) { }
    
    ngOnInit() {
      this.artworkService.getAllArtists().subscribe((data) => {
        this.artists = data;
        console.log(data);
      });
    }
}
    
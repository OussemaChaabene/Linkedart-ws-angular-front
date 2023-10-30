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

    users: any[];
    userId: any;
    userMail :any;
    ok=false;
    user:any;
    constructor(private artworkService: ArtworkService) { }
    
    ngOnInit() {
      this.artworkService.getAllUsers().subscribe((data) => {
        this.users = data;
        console.log(data);
        this.ok=false;

      });
    }

    onSubmitId() {
      // Check if artworkId is not empty before making the service call
      if (this.userId) {
          this.artworkService.getUserByID(this.userId).subscribe((userIdData) => {
              console.log('Artwork Data:', userIdData);
              this.user = userIdData;
              this.ok=true;
          });
      }
  }
  
  onSubmitMail() {
    // Check if artworkId is not empty before making the service call
    if (this.userId) {
        this.artworkService.getUserByID(this.userId).subscribe((userMailData) => {
            console.log('Artwork Data:', userMailData);
        });
    }
}
}
    
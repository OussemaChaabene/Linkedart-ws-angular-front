import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'app/artwork.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  Portfolios: any[];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.artworkService.getAllPortfolios().subscribe((data) => {
      this.Portfolios = data;
      console.log(data);
    });
  }

}

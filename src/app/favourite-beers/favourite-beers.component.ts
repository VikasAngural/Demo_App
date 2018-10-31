import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favourite-beers',
  templateUrl: './favourite-beers.component.html',
  styleUrls: ['./favourite-beers.component.css']
})
export class FavouriteBeersComponent implements OnInit {

  public favouriteBeers = [] ;
  constructor(private appService: DataService) { }

  ngOnInit() {
    this.favouriteBeers = this.appService.favouriteObject;
  }

}

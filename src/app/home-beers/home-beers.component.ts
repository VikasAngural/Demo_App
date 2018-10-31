import { Component, OnInit, HostListener } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home-beers',
  templateUrl: './home-beers.component.html',
  styleUrls: ['./home-beers.component.css']
})
export class HeaderBeersComponent implements OnInit {
  public beerData: any;
  private pageCount:number=1;
  private isClearResultVisible:boolean=false;
  private inputValue: string;

  constructor(private appService: DataService) { }
  ngOnInit() {
    this.appService.getBeers(undefined,this.pageCount).then(
      data => { // Success
        this.beerData = data;
      }
    );
   
  }
  
  @HostListener("window:scroll", ["$event"])

    onWindowScroll() {
    
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
      this.pageCount++;
      this.appService.getBeers(undefined,this.pageCount).then(
        data => { // Success
          this.beerData = this.beerData.concat(data);
        }
      );
  }


}

  markFavourite(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.id;
    var markedBeer = this.beerData.find(item => item.id == parseInt(idAttr) )
    this.appService.favouriteObject.push({'id':idAttr,'name':markedBeer.name,'image_url':markedBeer.image_url,'description':markedBeer.description});
  }

  searchBeer(searchValue: string){
    this.appService.getBeers(searchValue,undefined).then(
      data => { // Success
        this.isClearResultVisible=true;
        this.beerData = data;
      }
    );
  }

  searchOnEnter(searchValue: string){
    this.searchBeer(searchValue);
  }

  clearBeer(searchValue: string){
    this.inputValue="";
    this.appService.getBeers(undefined,this.pageCount).then(
      data => { // Success
        this.isClearResultVisible=false;
        this.beerData = data;
      }
    );
  }

}

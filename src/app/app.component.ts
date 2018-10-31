import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isHomeActive: boolean = true;
  isFavActive: boolean = false;
  constructor(router:Router) {
    router.navigate(['/home']);
  }

  ClickedHomeLink(){
    this.isHomeActive = true;
    this.isFavActive = false;
  }
  ClickedFavLink(){
    this.isFavActive = true;
    this.isHomeActive = false;
  }

}

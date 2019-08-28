import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  show: boolean = true;
  path: string;


  constructor(location: Location) {
    // get the current path and store
    this.path = location.path();
    
    // set show to false if path is not '' or '/'
    if ( location.path() != '' && location.path() != '/' ) {
      this.show = false;
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}

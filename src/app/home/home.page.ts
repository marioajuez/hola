
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  tabs = [
      { 
        path: "explore",
        description: "Para ti",
        icon: "person-outline",
      },
      { 
        path: "categories",
        icon: "globe-outline",
        description: "Encabezados",
      },
      {
        path: "favorites",
        icon: "star-outline",
        description: "Favoritos",
      }
  ]
  constructor(private router: Router ){
      for(let tab of this.tabs){
          if ( tab.path == this.router.url.split("/")[2]){
              tab.icon = tab.icon.split("-")[0]
          }
      } 
  }
  change(value){
    for( let tab of this.tabs){
          if(tab.path == value)
            tab.icon = tab.icon.split("-")[0];   
          else if(tab.icon.indexOf("-") == -1)
              tab.icon+= '-outline';
      }
  }
}

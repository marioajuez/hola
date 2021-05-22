import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/providers/data-local.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(
    public dataLocalService: DataLocalService
  ) { 
    
  }

  ngOnInit() {
  }

}

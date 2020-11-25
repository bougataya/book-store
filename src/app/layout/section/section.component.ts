import { Component, OnInit } from '@angular/core';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';
import { Router, RouteConfigLoadStart, NavigationEnd, ActivationEnd, ResolveEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  displayMiniBasket: any
  title: any
  constructor( private router: Router,private dataService: DataSharedService) {
      this.router.events.subscribe((val) => {
        if(val instanceof NavigationStart) {
          this.title = val.url == '/basket' ? 'Panier' : 'Livres'
        }
    });
     }

  ngOnInit(): void {
    this.displayBasket()
  }
  ngAfterViewInit(){}

  public displayBasket():void{
    this.dataService.displayMiniBasket$.subscribe((response) => {
      this.displayMiniBasket = response 
    });
  }
}

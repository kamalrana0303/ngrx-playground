import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
const config = {
  small: [Breakpoints.Small, Breakpoints.XSmall],
  medium: [Breakpoints.Medium],
  large: [Breakpoints.Large, Breakpoints.XLarge],
};
@Component({
  selector: 'app-home-page-description',
  templateUrl: './home-page-description.component.html',
  styleUrls: ['./home-page-description.component.scss']
})
export class HomePageDescriptionComponent implements OnInit , OnDestroy{

  mobileView:boolean;
  subscription:Subscription
  updateView = ({ matches }: BreakpointState) => {
    if (matches) {
      this.mobileView=true;
    } else if (!matches ) {
      this.mobileView=false;
    }
  };

  constructor( private observer: BreakpointObserver) { }
  ngOnInit() {
    this.subscription=this.observer.observe(config.small).subscribe(this.updateView);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

}

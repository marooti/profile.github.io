import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.scss']
})
export class PricingPlansComponent implements OnInit {
  colors: any[] = [
    {
     color: 'white',
     plan: 'Base',

    },
    {
     color: '#181818',
     plan: 'Base',
    },
    {
     color: 'white',
     plan: 'Base',
    }
  ]; // Add your desired colors to the array

  constructor() { }

  ngOnInit(): void {
  }

}

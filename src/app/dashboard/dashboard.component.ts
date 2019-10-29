import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // Number of cards to be generated with column and rows to be covered  

    cards = [  

      { title: 'Card 1', cols: 1, rows: 1 },  
  
      { title: 'Card 2', cols: 1, rows: 1 },  
  
      { title: 'Card 3', cols: 1, rows: 1 },  
  
      { title: 'Card 4', cols: 1, rows: 1 } ,
      { title: 'Card 5', cols: 1, rows: 1 },
      { title: 'Card 6', cols: 1, rows: 1 } 
  
    ];  

}

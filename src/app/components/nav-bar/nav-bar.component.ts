import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  
  title :string
  
  constructor() { 
    this.title = "RentaCar by Team-Angular";
  }

  showButtons(){
    
  }

  ngOnInit(): void {
  }

}

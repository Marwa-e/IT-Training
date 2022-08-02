import { Component, OnInit } from "@angular/core";
  
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
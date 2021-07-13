import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {

  @Input() page: string;
  showTextbox: boolean;

  constructor() {
    // this.showTextbox = this.page === 'home' ?? true;
    this.showTextbox = true;
  }

  ngOnInit() {}

}

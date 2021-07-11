import { Component, Input, OnInit } from '@angular/core';
import { IMovement } from 'src/app/model/movement.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() movement: IMovement;

}

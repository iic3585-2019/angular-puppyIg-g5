import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  // TODO: Cuando se de like modificar el booleano is_liked para que el html de
  // ese componente resalte el botón
  is_liked: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

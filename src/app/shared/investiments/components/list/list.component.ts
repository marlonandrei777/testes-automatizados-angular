import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments: Array<Investiments> = [
    {
      name: 'Itaú',
      value: 100,
    },
    {
      name: 'Nubank',
      value: 100,
    },
    {
      name: 'Pag',
      value: 100,
    },
    {
      name: 'Next',
      value: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

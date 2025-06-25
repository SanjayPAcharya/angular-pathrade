import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-container',
  imports: [RouterModule, NgFor, RouterLinkActive],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
})
export class MainContainerComponent {
  navs = [
    {
      label: 'Reactive Forms',
      link: 'reactiveforms',
    },
  ];
}

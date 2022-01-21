import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = {defaultOptions: [], accessLink: [] }
  customOptions: Array<any> = []
  constructor() { }

ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-state',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil-books',
        router: ['/', 'favorites']
      },
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      }
    ]
    this.customOptions = [
      {
        name: 'Lista #1',
        router: ['/']
      },
      {
        name: 'Lista #2',
        router: ['/']
      },
      {
        name: 'Lista #3',
        router: ['/']
      },
      {
        name: 'Lista #4',
        router: ['/']
      },
      {
        name: 'Lista #5',
        router: ['/']
      }
    ]
  }

}

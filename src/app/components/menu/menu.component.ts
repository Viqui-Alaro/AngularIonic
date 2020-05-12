import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'Home',
      path: '/Home'
    },
    {
      name: 'About',
      path: '/About'
    },
    {
      name: 'Contact',
      path: '/Contact'
    },
    {
      name: 'Posts',
      path: '/Posts'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

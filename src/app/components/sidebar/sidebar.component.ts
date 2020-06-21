import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {

        label: 'Dashboard',
        icon: 'fa fa-credit-card',
        expanded: true,
        routerLink: '/dashboard',
        visible: true,
      },
      {

        label: 'Payments',
        icon: 'fa fa-credit-card',
        routerLink: '/payments',
        expanded: false,
      }
      ,
      {
        label: 'Reports',
        icon: 'fa fa-file-text-o',
        routerLink: '/reports',
        expanded: false,
        visible: true,
      },
      {
        label: 'Global Settings',
        icon: 'fa fa-cog',
        routerLink: '/global-settings',
        expanded: false,
        visible: true,
      }
    ];
  }

}

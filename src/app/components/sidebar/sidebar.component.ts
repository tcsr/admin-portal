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
        items: [
          {
            label: 'Payment to Farmer',
            icon: 'fa fa-money',
            routerLink: '/transaction',
            expanded: false,
            visible: true,
          },
          {
            label: 'Payment to Farmer Lead',
            icon: 'fa fa-user-secret',
            routerLink: '/reimburse',
            expanded: false,
            visible: true,
          },
        ]
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
      },
      {
        label: 'Transaction History',
        icon: 'fa fa-credit-card-alt',
        routerLink: '/ledgertxns',
        expanded: false,
        visible: true,

      },
      {
        label: 'Dispatch',
        icon: 'fa fa-truck',
        routerLink: '/dispatch',
        expanded: false,
        visible: true,
      },
      {
        label: 'Loans',
        icon: 'fa fa-home',
        routerLink: '/loans',
        expanded: false,
        visible: true,
      },
      {
        label: 'Premiums/Commissions',
        icon: 'fa fa-user-plus',
        routerLink: '/premiums-processing-and-approvals',
        expanded: false,
        visible: true,
        items: [
          {
            label: 'Farmer Premiums',
            icon: 'fa fa-money',
            routerLink: '/farmer-premium',
            expanded: false,
            visible: true,
          },
          {
            label: 'Farmer Lead Commissions',
            icon: 'fa fa-money',
            routerLink: '/farmerlead-premium',
            expanded: false,
            visible: true,
          },
          {
            label: 'Premium Process',
            icon: 'fa fa-cog',
            routerLink: '/premium-process',
            expanded: false,
            visible: true,
          },
          {
            label: 'Farmer Approvals',
            icon: 'fa fa-check-circle',
            routerLink: '/farmer-approvals',
            expanded: false,
            visible: true,
          },
          {
            label: 'Farmer Lead Approvals',
            icon: 'fa fa-check-circle',
            routerLink: '/farmer-lead-approvals',

            expanded: false,
            visible: true,
          },
          {
            label: 'Premium Processing Errors',
            icon: 'fa fa-cog',
            routerLink: '/premium-process-errors',
            expanded: false,
            visible: true,
          },
          {
            label: 'Periodic Premium Approval',
            icon: 'fa fa-check-circle',
            routerLink: '/periodic-premiums-approvals',
            expanded: false,
            visible: true,
          }
        ]
      }
    ]
  }

}

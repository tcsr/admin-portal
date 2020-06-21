import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LikeListComponent } from './components/navbar/like-list/like-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, LikeListComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  exports: [NavbarComponent, LikeListComponent],
})
export class NavbarModule {}

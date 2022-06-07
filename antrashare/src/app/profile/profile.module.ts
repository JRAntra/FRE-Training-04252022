import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ReactiveFormsModule
    ]
})

export class ProfileModule { }

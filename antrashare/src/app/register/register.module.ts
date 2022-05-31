import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ReactiveFormsModule
    ]
})

export class RegisterModule { }

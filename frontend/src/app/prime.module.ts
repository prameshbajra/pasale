import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    imports: [
        ButtonModule,
        CardModule, ConfirmDialogModule, DialogModule, InputTextModule, InputTextareaModule,
        CommonModule
    ],
    exports: [
        ButtonModule,
        CardModule, ConfirmDialogModule, DialogModule, InputTextModule, InputTextareaModule
    ]
})

export class PrimeModule { }

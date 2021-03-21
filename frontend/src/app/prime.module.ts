import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';



@NgModule({
    imports: [
        ButtonModule,
        CardModule, ConfirmDialogModule, DialogModule,
        CommonModule
    ],
    exports: [
        ButtonModule,
        CardModule, ConfirmDialogModule, DialogModule
    ]
})

export class PrimeModule { }

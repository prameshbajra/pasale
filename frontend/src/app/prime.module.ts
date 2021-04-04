import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    imports: [
        ButtonModule,
        CardModule, ConfirmDialogModule, DialogModule, DividerModule, FieldsetModule, InputTextModule, InputTextareaModule,
        CommonModule
    ],
    exports: [
        ButtonModule,
        CardModule, ConfirmDialogModule, DialogModule, DividerModule, FieldsetModule, InputTextModule, InputTextareaModule
    ]
})

export class PrimeModule { }

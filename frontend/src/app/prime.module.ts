import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
    imports: [
        ButtonModule,
        CardModule,
        CommonModule
    ],
    exports: [
        ButtonModule,
        CardModule
    ]
})

export class PrimeModule { }

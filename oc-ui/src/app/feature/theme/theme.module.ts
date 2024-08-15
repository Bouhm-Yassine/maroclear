import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ThemeComponent } from './theme.component';


const modules = [CommonModule, FormsModule, ReactiveFormsModule, NzButtonModule,
  NzTableModule, NzRadioModule, NzFormModule, NzCheckboxModule, NzInputModule]

const routes: Routes = [
  {
    path: "",
    component: ThemeComponent,
  }
]


@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ...modules
  ]
})
export class ThemeModule { }

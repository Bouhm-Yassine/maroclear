import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { TransactionsComponent } from './transactions.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsAddComponent } from './components/transactions-add/transactions-add.component';


const routes: Routes = [
  {
    path: "",
    component: TransactionsComponent
  }
]


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent,
    TransactionsAddComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzInputNumberModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzModalModule,
    NzNotificationModule,
    NzMessageModule,
    NzDatePickerModule,
    NzTableModule,
    TagComponent,
    NzDropDownModule,
  ]
})
export class TransactionsModule { }

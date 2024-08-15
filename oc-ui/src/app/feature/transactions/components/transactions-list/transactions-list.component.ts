import { Component, Input } from '@angular/core';
import { TransactionStateService } from '../../transaction.state';

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styles: ``
})
export class TransactionsListComponent {

  pageSize = 10;
  pageIndex = 1;

  constructor(public transactionState: TransactionStateService) { }

}

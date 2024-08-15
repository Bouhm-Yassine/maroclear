import { Component, computed, signal } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { TransactionsAddComponent } from './components/transactions-add/transactions-add.component';
import { TransactionStateService } from './transaction.state';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent {
  constructor(
    private modalService: NzModalService,
    private transactionState: TransactionStateService
  ) { }

  addTransaction(): void {
    const modal: NzModalRef = this.modalService.create<TransactionsAddComponent>({
      nzContent: TransactionsAddComponent,
      nzTitle: "Nouvelle transaction",
      nzOkText: "Sauvegarder",
      nzMaskClosable: false,
      nzWrapClassName: "vertical-center-modal",
      nzBodyStyle: { maxHeight: "500px", overflow: "auto" }
    });

    modal.afterClose.subscribe((res: any) => {
      if (res) this.transactionState.transactionAdded$.next(res)
    });
  }
}

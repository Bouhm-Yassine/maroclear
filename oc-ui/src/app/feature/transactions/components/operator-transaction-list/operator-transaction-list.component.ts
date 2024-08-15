import { Component } from '@angular/core';
import { TransactionStateService } from '../../transaction.state';
import { CompleterOperationComponent } from '../completer-operation/completer-operation.component';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'operator-transaction-list',
  templateUrl: './operator-transaction-list.component.html',
  styles: ``
})
export class OperatorTransactionListComponent {
  pageSize = 10;
  pageIndex = 1;

  constructor(
    private modalService: NzModalService,
    public transactionState: TransactionStateService) { }

  completer(): void {
    const modal: NzModalRef = this.modalService.create<CompleterOperationComponent>({
      nzContent: CompleterOperationComponent,
      nzTitle: "Compléter l'opération",
      nzOkText: "Sauvegarder",
      nzMaskClosable: false,
      nzWrapClassName: "vertical-center-modal",
      nzBodyStyle: { maxHeight: "500px", overflow: "auto" }
    });

    modal.afterClose.subscribe((res: any) => {
      // if (res) this.transactionState.transactionAdded$.next(res)
    });
  }
}

import { Injectable, computed, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';

interface TransactionState {
  data: any[];
}

@Injectable({
  providedIn: 'root'
})
export class TransactionStateService {

  // state
  private state = signal<TransactionState>({ data: [] })

  // selectors
  data = computed(() => this.state().data)
  total = computed(() => this.state().data.length)

  // actions
  transactionAdded$ = new Subject<boolean>()

  constructor() {
    // reducers: to change state
    this.transactionAdded$
      .pipe(takeUntilDestroyed())
      .subscribe((value: any) => {
        this.state.update((state) => ({ ...state, data: [...state.data, value] }))
      })
  }
}

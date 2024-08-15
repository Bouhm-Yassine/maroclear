import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { submitForm } from '../../../../shared/form.utils';

@Component({
  selector: 'app-transactions-add',
  templateUrl: './transactions-add.component.html',
  styles: ``
})
export class TransactionsAddComponent {
  emetteurs = ['Maroc telecom']
  type_actions = ['OPCM']
  depositaires = ['AWB', 'BOA']
  exclusifs = ['Oui', 'Non']

  loading = signal<boolean>(false);
  form!: FormGroup;

  constructor(
    public modal: NzModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      id: null,
      emetteur: [null, Validators.required],
      type_action: [null, Validators.required],
      date_emission: [null, Validators.required],
      date_echeance: [null, Validators.required],
      dividende: [null, Validators.required],
      interet: [null, Validators.required],
      depositaire_inscription: [null, Validators.required],
      exclusif: [null, Validators.required],
      depositaire_radiation: [null, Validators.required]
    });
  }

  onSave(): void {
    try {
      this.loading.set(true)

      if (this.form.valid) {
        this.loading.set(false);
        this.modal.close(this.form.value);
      } else {
        submitForm(this.form);
        setTimeout(() => { this.loading.set(false) }, 250);
      }
    } catch (error) {
      this.modal.close(false);
    }
  }

  onCancel() {
    this.modal.close(false);
  }

  percentFormatter = (value: number): string => this.checkFalsyExceptZero(value) ? `${value}  %` : "";

  checkFalsyExceptZero(val: any): boolean {
    return val || val === 0;
  }
}

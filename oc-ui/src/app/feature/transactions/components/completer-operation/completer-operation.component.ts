import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { submitForm } from '../../../../shared/form.utils';

@Component({
  selector: 'app-completer-operation',
  templateUrl: './completer-operation.component.html',
  styles: ``
})
export class CompleterOperationComponent {
  key_types = ['Public key', 'Private key']

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
      key_type: ['Public key', Validators.required],
      public_key: [null],
      nom: [null],
      prenom: [null],
      cin: [null],
      date_naissance: [null],
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

}

import { AbstractControl, FormArray, FormGroup } from "@angular/forms";

export const markControlsAsDirty = (control: AbstractControl) => {
  control.markAsDirty();
  control.updateValueAndValidity();
}

export const submitForm = (form: FormGroup): void => {
  for (const i in form.controls) {
    markControlsAsDirty(form.controls[i]);
  }
}

export const submitFullForm = (form: FormGroup): void => {
  markControlsAsDirtyRecursive(form);
}

const markControlsAsDirtyRecursive = (formGroup: FormGroup | FormArray): void => {
  Object.values(formGroup.controls).forEach((control) => {
    if (control instanceof FormGroup || control instanceof FormArray) {
      markControlsAsDirtyRecursive(control);
    } else {
      markControlsAsDirty(control);
    }
  });
}

export function mapOptions(questionOptions: any[],): any[] {
  return questionOptions.map(option => mapOption(option));
}

function mapOption(option: any): any {
  const mappedOption: any = {
    value: { label: option.label, value: option.value },
    label: option.label
  };

  if (option.options && option.options.length > 0) {
    mappedOption.children = mapOptions(option.options);
  } else {
    mappedOption.isLeaf = true;
  }

  return mappedOption;
}

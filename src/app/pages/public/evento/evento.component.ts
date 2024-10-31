import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  eventForm!: FormGroup;

  constructor() {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.compose([Validators.required, this.dateValidator])),
      location: new FormControl('', Validators.required),
      capacity: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      creatorName: new FormControl('', Validators.required)
    });
  }

  // Custom validator to ensure the date is not in the past
  dateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Set today's date to midnight for accurate comparison

    return selectedDate < today ? { pastDate: true } : null;
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
    }
    this.eventForm.reset();
  }
}

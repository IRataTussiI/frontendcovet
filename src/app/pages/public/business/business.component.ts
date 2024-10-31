import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../../../services/cities.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  formData!: FormGroup;
  ciudades:any[]=[];

  constructor(private cities:CitiesService) {
    this.formData = new FormGroup({
      firstname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      coordinates: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      owner: new FormControl('', Validators.required)
    });
  }

  ngOnInit(){
    this.cities.getcities().subscribe(data => {
      console.log(data, "ciudades");
      this.ciudades = data.data;
    })
  }

  onSubmit() {
    if(this.formData.valid) {
      console.log(this.formData.value);
    }
    this.formData.reset();
  }

}

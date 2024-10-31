import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], // Agregar FormsModule para el uso de ngForm y ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData!: FormGroup;

  username: string = '';
  password: string = '';

  onSubmit() {
    if(this.formData.valid)
    {
      console.log(this.formData.value);
    }
  }
  constructor( 
    // private authService: AuthService,
    // private router: Router
  ) {
    this.formData = new FormGroup({
      email: new FormControl( '', [ Validators.required, Validators.email ] ),
      password: new FormControl( '', [ Validators.required, Validators.minLength( 8 ), Validators.maxLength( 20 ) ] )
    });

    console.log( 
      'Constructor'
    )
  }
}


import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['CANDIDAT'] // Vous pouvez initialiser le rôle ici
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.http.post<any>('http://localhost:8081/auth/signup', this.signUpForm.value)
        .subscribe(
          response => {
            console.log('Inscription réussie:', response);
            // Redirection vers une autre page après l'inscription réussie
            this.router.navigate(['/']);
          },
          error => {
            console.error('Erreur lors de l\'inscription:', error);
            this.errorMessage = error.error.message || 'Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.';
          }
        );
    }
  }
}

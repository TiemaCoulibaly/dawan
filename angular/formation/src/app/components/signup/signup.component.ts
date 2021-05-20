import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email!: FormControl;
  password!: FormControl;
  confirm!: FormControl;
  terms!: FormControl;

  form!: FormGroup;

  constructor(private fb: FormBuilder, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Inscription');
    //FormControl(default value, options or [SyncValidators])
    this.email = new FormControl(null, [
      Validators.required,
      CustomValidators.email(),
    ]);
    this.password = new FormControl(null, [Validators.required]);
    this.confirm = new FormControl(null, [Validators.required]);
    this.terms = new FormControl(false, [Validators.requiredTrue]);

    this.form = this.fb.group(
      {
        email: this.email,
        password: this.password,
        confirm: this.confirm,
        terms: this.terms,
      },
      {
        validators: CustomValidators.matchPassword(),
      }
    );
  }

  public validateEmail(): string | null {
    if (this.email.touched) {
      if (this.email.getError('required')) {
        return `L'adresse email est obligatoire`;
      }
      if (this.email.getError('email')) {
        return `L'adresse email n'est pas valide`;
      }
    }
    return null;
  }
  public validatePassword(): string | null {
    if (this.password.touched) {
      if (this.password.getError('required')) {
        return `Le mot de passe est obligatoire`;
      }
    }
    return null;
  }
  public validateConfirm(): string | null {
    if (this.confirm.touched) {
      if (this.confirm.getError('required')) {
        return `Le confirmation est obligatoire`;
      }
      if (this.form.getError('match_password')) {
        return `La confirmation et le mot de passe ne correspondent pas`;
      }
    }
    return null;
  }
  public validateTerms(): string | null {
    if (this.terms.touched) {
      if (this.terms.getError('required')) {
        return `Le GCU est obligatoire`;
      }
    }
    return null;
  }

  public inscription(): void {
    this.form.markAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }
}

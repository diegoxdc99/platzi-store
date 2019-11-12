import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildForms();
  }

  buildForms() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then((result) => {
        this.router.navigate(['admin']);
      }).catch((err) => {
        alert('no es valido' + JSON.stringify(err));
      });
    }
  }
}

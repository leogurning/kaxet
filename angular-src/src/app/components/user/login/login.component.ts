import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.authService.logout();
  }
  
  loginForm: FormGroup = this.fb.group({
    username: this.username,
    password: this.password,
  });

  loginUser(formdata:any): void {
    this.authService.logout();
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value)
        .subscribe(data => {
          if (data.json().success === false) {
            this.loading = false;
            this.toastr.error(data.json().message);
          } else {
            this.loading = false;
            this.toastr.success('Login successful.');
            this.router.navigate(['report']);
          }
          this.loginForm.reset();
        });
    }
  }

}
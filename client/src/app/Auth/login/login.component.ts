import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authServ = inject(AuthService);
  toastr= inject(ToastrService)
  user: User = new User();
  isFormSumbited= false
  router= inject(Router
    
  )
  handleSubmit(userForm) {
    this.authServ.login(userForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response['accessToken']);
         this.toastr.success('Successful login!');
         this.router.navigateByUrl('/home');
        console.log(response);
      },
      error: (err) => {
         this.toastr.error(err['error'].message);
        
        console.log('error', err['error'].message);
      },
    });
  }

  
  
}

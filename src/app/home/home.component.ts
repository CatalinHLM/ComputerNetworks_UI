import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent} from '../login/login.component';
import { Router } from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog: MatDialog,
    private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {

    if(localStorage.getItem('token') != null){
      console.log(localStorage.getItem('token'));
      this.userService.checkToken().subscribe((response:any)=>{
        this.router.navigate(['/task']);
      },(error:any)=>{
        console.log(error);
      })
    }
  }

  signupAction() {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(SignupComponent,dialogConfig);
  }

  loginAction() {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(LoginComponent,dialogConfig);
  }


}

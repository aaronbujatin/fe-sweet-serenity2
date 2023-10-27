import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private userService: UserService, private myRoute: Router) { }

  user: User = new User();



  onSubmit() {

    this.userService.sendInquiry(this.user).subscribe(
      (response) => {
        this.successAlert()
      }, (error) => {
        console.log(error);
      }
    )
  }

  successAlert() {
    Swal.fire({
      text: "Your reservation was successful. You will now redirect to our homepage",
      icon: "success",
      confirmButtonText: "OK",
      showCloseButton: true,
      confirmButtonColor: '#E8AAAD',
    }).then((result) => {
      if (result.isConfirmed) {
        this.myRoute.navigate([""]);
      }
    });
  }

  isValidGmail(email: string): boolean {
    return email?.toLowerCase().endsWith('@gmail.com');

  }
}

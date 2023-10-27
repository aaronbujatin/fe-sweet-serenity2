import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { RegistrationFee } from './../../model/registration-fee';
import { Booking } from 'src/app/model/booking.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private userService: UserService, private myRoute: Router) {
    this.booking = new Booking();
    this.registrationFee = new RegistrationFee();
  }


  booking: Booking;
  registrationFee: RegistrationFee;

  onSubmit() {

    // this.userService.sendInquiry(this.user).subscribe(
    //   (response) => {
    //     this.successAlert()
    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
    console.log(this.booking);



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

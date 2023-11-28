import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { RegistrationFee } from './../../model/registration-fee';
import { Booking } from 'src/app/model/booking.model';
import { BookingService } from 'src/app/service/booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  constructor(private userService: UserService,
    private myRoute: Router,
    private bookingService: BookingService) {
    this.booking = new Booking();
    this.registrationFee = new RegistrationFee();
  }


  booking: Booking;
  registrationFee: RegistrationFee;

  onSubmit() {
      this.bookingService.save(this.booking).subscribe(
        (response) => {

          console.log(response);
          this.successAlert()
        }, (error) => {
          console.log(error);
        }
      )
 

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

  ErrorInputFillAlert() {
    Swal.fire({
      text: "Please fill the inputs",
      icon: "warning",
      confirmButtonText: "OK",
      showCloseButton: true,
      confirmButtonColor: '#E8AAAD',
    })
  }

  isValidGmail(email: string): boolean {
    return email?.toLowerCase().endsWith('@gmail.com');
  }

  onDateChange(event: any) {
    // You can access the selected date via this.booking.weddingDate
    console.log('Selected Wedding Date:', this.booking.weddingDate);
  }



}

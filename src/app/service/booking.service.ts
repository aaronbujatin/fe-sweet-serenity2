import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Booking } from '../model/booking.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private htttpClient : HttpClient) { }

  private API_URL = environment.baseUrl; 
  private LOCAL_API = "http://localhost:8080"

  public save(booking : Booking){
    return this.htttpClient.post(`${this.API_URL}/api/v1/bookings`, booking);
  }
}

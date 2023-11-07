import { RegistrationFee } from './registration-fee';
export class Booking {


    id:number;
    clientName : string
    clientContactNumber : string
    email : string
    groomName : string
    groomContactNumber : string
    brideName : string
    brideContactNumber : string
    address : string
    weddingDate : string;
    weddingType : string;
    weddingTheme : string;
    ceremonyVenue : string;
    receptionVenue : string;
    selectedPackage : string;
    registrationFee : RegistrationFee = new RegistrationFee();
    eventName : string
    
}

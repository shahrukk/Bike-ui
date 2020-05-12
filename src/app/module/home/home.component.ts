import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import {FormGroup ,FormControl, Validator, Validators} from '@angular/forms';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[]=[
    'UXTC-05',
    'UXTC-06'
  ];
  bikeform: FormGroup;
  validMessage: string="";

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('',Validators.required),
      contect: new FormControl()
    }); 
  }
  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage="Your bike registration has been submitted !";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data=>{
          this.bikeform.reset();
          return true;
        },
        error=>{
          return Observable.throw (error);
          
        }
      )
    }
    else{
      this.validMessage= "Please fill the form before submitting";
    }
  }

}

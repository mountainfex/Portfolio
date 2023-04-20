import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  isSubmitted = false;
  emailSent: boolean = false;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  constructor(private http: HttpClient) {}
  post = {
    endPoint: 'PFAD ZUR PHP DATEI',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  

  ngOnInit(): void {
  }

  onSubmit(ngForm: any) {
    this.isSubmitted = true;
    if (this.myForm.valid){
      this.isSubmitted = false;
      this.myForm.reset();
    } 
    if (this.myForm.valid) {
      let data = {
        name: this.myForm.value.name,
        email: this.myForm.value.email,
        message: this.myForm.value.message
      }
      this.http
        .post(this.post.endPoint, data)
        .subscribe({
          next: (response) => {
            ngForm.resetForm()
            this.emailSent = true;
            this.timeOutSendMail();
          },
          error: (error) => {
          },
        });
    } else {
    }
  }

  timeOutSendMail() {
    setTimeout(() => {
      this.emailSent = false;
    }, 2000)

  }
  }


// const nodemailer = require("nodemailer");

// async function main (){
// let testAccount = await nodemailer.createTestAccount();

// let transporter = nodemailer.createTransport ({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: testAccount.user, // generated ethereal user
//     pass: testAccount.pass, // generated ethereal password
//   },
// });
// }






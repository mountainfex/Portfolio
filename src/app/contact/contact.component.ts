import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isSubmitted: boolean = false;
  emailSent: boolean = false;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private http: HttpClient) {}
  post = {
    endPoint: 'http://niklastibbe.com/sendmail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: any) {
    debugger;
    this.isSubmitted = true;
    if (this.myForm.valid) {
      let data = {
        name: this.myForm.value.name,
        email: this.myForm.value.email,
        message: this.myForm.value.message,
      };
      this.emailSent = true;
      this.http.post(this.post.endPoint, data).subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.timeOutSendMail();
        },
        error: (error) => {},
      });
      this.isSubmitted = false;
    }
  }

  timeOutSendMail() {
    setTimeout(() => {
      this.emailSent = false;
    }, 4000);
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

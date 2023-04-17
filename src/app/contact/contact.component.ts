import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required],[]),
    email: new FormControl('', [Validators.required, Validators.email],[]),
    message: new FormControl('', [Validators.required],[]),
  })

}

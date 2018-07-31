import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomFormsModule } from 'ngx-custom-validators';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  



  ngOnInit() {
  }

  saveContactForm(contactDetails: NgForm ): void
  {
    console.log(contactDetails.value);
  }

}

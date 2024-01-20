import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit {
  // Initialize the FormGroup when declared
  myForm: FormGroup = new FormGroup({
    longDescription: new FormControl(),
  });

  ngOnInit() {
    // You can keep any additional initialization logic in the ngOnInit method
  }
}

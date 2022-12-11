import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ]
})
export class AppComponent implements OnInit{
  title = 'angular-standalone';

  formGroup!: FormGroup<{
    name: FormControl<string>;
    lastName: FormControl<string>;
    firstName: FormControl<string>;
    phoneNumber?: FormControl<number>;
  }>;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this._fb.nonNullable.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required]
    })
  }
}

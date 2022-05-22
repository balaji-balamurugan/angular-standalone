import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AppComponent implements OnInit{
  title = 'angular-standalone';

  formGroup!: FormGroup<{
    name: FormControl<string>;
    lastName: FormControl<string>;
    firstName: FormControl<string>;
    phoneNumber?: FormControl<Number>;
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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StyleManager } from '../style-manager.service';

@Component({
  standalone: true,
  template: `
    <div>
      <h1>Angular Material Theming System: Complete Guide</h1>
      <button
        mat-icon-button
        (click)="toggleDarkTheme()"
        class="theme-toggle"
        aria-label="Toggle Dark Theme"
      >
        <mat-icon>{{ isDark ? 'dark_mode' : 'light_mode' }}</mat-icon>
      </button>
      <div class="demo-buttons">
        <button mat-raised-button color="primary">Raised</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
      </div>

      <mat-form-field
        appearance="fill"
        class="example-form-field"
        color="primary"
      >
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="datepicker" />
        <mat-datepicker-toggle
          matIconSuffix
          [for]="datepicker"
        ></mat-datepicker-toggle>
        <mat-datepicker #datepicker>
          <mat-datepicker-actions>
            <button mat-button matDatepickerCancel>Cancel</button>
            <button mat-raised-button color="primary" matDatepickerApply>
              Apply
            </button>
          </mat-datepicker-actions>
        </mat-datepicker>
      </mat-form-field>

      <div class="demo-buttons">
        <!-- success buttons -->
        <button mat-button color="success">Success</button>
        <button mat-stroked-button color="success">Success Stroked</button>
        <button mat-flat-button color="success">Success Flat</button>
        <button mat-raised-button color="success">Success Raised</button>
        <button mat-icon-button color="success">
          <mat-icon>check_circle</mat-icon>
        </button>
        <button mat-fab color="success">
          <mat-icon>check_circle</mat-icon>
        </button>
        <button mat-mini-fab color="success">
          <mat-icon>check_circle</mat-icon>
        </button>
      </div>

      <div class="demo-buttons">
        <!-- info buttons -->

        <button mat-button color="info">Info</button>
        <button mat-stroked-button color="info">Info Stroked</button>
        <button mat-flat-button color="info">Info Flat</button>
        <button mat-raised-button color="info">Info Raised</button>
        <button mat-icon-button color="info">
          <mat-icon>info</mat-icon>
        </button>
        <button mat-fab color="info">
          <mat-icon>info</mat-icon>
        </button>
        <button mat-mini-fab color="info">
          <mat-icon>info</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      div {
        padding: 1rem;
        padding-right: 56px;
      }

      .theme-toggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
      }

      .demo-buttons {
        button {
          margin-right: 8px;
        }
      }
    `,
  ],
  imports: [
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
})
export class HomeComponent {
  isDark = this.styleManager.isDark;

  constructor(private styleManager: StyleManager) {}

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}

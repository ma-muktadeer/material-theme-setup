import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('material-theme');
  currentTheme = signal<'lignt-theme' | 'dark-theme'>('lignt-theme');

  toggleTheme() {
    console.log('theme color', this.currentTheme());

    this.currentTheme.update(theme => theme === 'lignt-theme' ? 'dark-theme' : 'lignt-theme');
  }
}

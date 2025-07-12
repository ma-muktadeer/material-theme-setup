import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('material-theme');
  currentTheme = signal<'light-theme' | 'dark-theme'>('light-theme');

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      console.log('Platform is =>', navigator.userAgent);
    }
  }

  toggleTheme() {
    console.log('theme color', this.currentTheme());

    this.currentTheme.update(theme => theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    document.body.classList.remove('demo-unicorn-dark-theme', 'demo-experimental-theme');
    document.body.classList.add(this.currentTheme() === 'dark-theme'? 'demo-unicorn-dark-theme' : 'demo-experimental-theme');
    // document.body.classList.remove('light-theme', 'dark-theme');
    // document.body.classList.add(this.currentTheme());
  }
}

import { Routes } from '@angular/router';
import { TestForm } from './pages/test-form/test-form';

export const routes: Routes = [
  {
    path: '', component: TestForm, pathMatch: 'full'
  }
];

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './screens/reactive-forms/reactive-forms.component';
import { MainContainerComponent } from './main-container/main-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'reactiveforms',
        pathMatch: 'full',
      },
      {
        path: 'reactiveforms',
        component: ReactiveFormsComponent,
      },
    ],
  },
];

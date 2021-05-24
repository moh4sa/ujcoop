import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClincComponent } from './components/clinc/clinc.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'clinc', component: ClincComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }   from './home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
];

@NgModule({
	imports:  [RouterModule.forChild(routes)],
	declarations: [HomeComponent]
})
export class HomeModule { }

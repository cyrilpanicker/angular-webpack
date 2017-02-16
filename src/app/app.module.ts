import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'about', loadChildren: './about/about.module#AboutModule' }
];

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		HomeModule,
		RouterModule.forRoot(routes)
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule { }

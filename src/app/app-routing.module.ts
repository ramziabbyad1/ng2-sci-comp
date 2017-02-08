import { NgModule }             from '@angular/core';
import { APP_BASE_HREF }				from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainContainer } 				from './containers/main';
import { HomeComponent } 			from './ui/screens/home.component';
import { AboutComponent } 			from './ui/screens/about.component';

const routes: Routes = [
  { 
					path: '', 
					component: MainContainer, 
					//pathMatch: 'full',
					children: [
						{
							path: '',
							component: HomeComponent
						},
						{
							path: 'about',
							component: AboutComponent
						}
					]
	}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
	providers: [{provide: APP_BASE_HREF, useValue: '/'}] //a hack to fix angular-cli unit testing
})
export class AppRoutingModule {}

/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppModule }			from './app.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/navbar/nav-bar.component';
import { RouterOutletStubComponent} from '../testing/router-stubs';


describe('AppComponent', () => {
	let titleString: string;
  beforeEach(() => {
		titleString	= 'The prodigal son has returned...';
    TestBed.configureTestingModule({
			imports: [AppModule]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title ${titleString}`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(titleString);
 }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(titleString);
  }));

/*  it('should create a NavBar component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('navbar-bar').toBeTruthy();
  }));*/
});

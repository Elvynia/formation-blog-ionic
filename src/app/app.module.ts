import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BlogLibModule } from 'betterblog';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EditPage } from '../pages/edit/edit';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		EditPage,
		ContactPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		BlogLibModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage,
		EditPage,
		ContactPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }

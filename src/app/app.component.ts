import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArticleService } from 'betterblog';

import { NAV_LIST, NAV_CREATE, NAV_CONTACT, NAV_HOME } from 'betterblog';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EditPage } from '../pages/edit/edit';
import { ContactPage } from '../pages/contact/contact';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = HomePage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
		private alertCtrl: AlertController, private articleService: ArticleService) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}

	loadData() {
		this.articleService.initialize().subscribe({
			error: (response) => {
				this.alertCtrl.create({
					title: 'Erreur de chargement',
					subTitle: 'Impossible de charger le fichier de données JSON',
					buttons: [{
						text: 'OK',
						role: 'cancel'
					}, {
						text: 'Réessayer',
						handler: () => {
							setTimeout(() => this.loadData());
						}
					}]
				}).present();
			}
		});
	}

	navigate(path: string) {
		if (path === NAV_HOME) {
			this.rootPage = HomePage;
		} else if (path === NAV_LIST) {
			this.rootPage = ListPage;
		} else if (path === NAV_CREATE) {
			this.rootPage = EditPage;
		} else if (path === NAV_CONTACT) {
			this.rootPage = ContactPage;
		} else {
			console.error('Navigation path %s not managed by ion-blog...', path);
		}
	}
}

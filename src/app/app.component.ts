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

// Ce fichier comporte le composant Angular racine généré et utilisé par Ionic pour démarrer l'application.
@Component({
	templateUrl: 'app.html'
	// Pas de 'styles' ou 'styleUrls' dans Ionic, les fichiers SASS sont nommés de manière identique
	// à la classe TypeScript qui décrit le component. Il est possible de développer avec des fichiers
	// CSS mais cela est déconseillé par Ionic (option à utiliser avec la commande 'ionic start').
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
				/* Le service AlertController permet de préparer et gérer des fenêtre pop-up simplement.
				 * La fonction create permet de préparer une pop-up en décrivant des propriétés. Les
				 * différentes options permettent si besoin de contrôler les actions des boutons et de 
				 * placer des champs de saisie.
				 *
				 * Attention !! -> Pour utiliser la navigation à la fermeture de la pop-up, il faut attendre
				 * la FIN de la transition de fermeture de la pop-up grâce à la fonction 'dismiss()' de l'objet
				 * 'alert' créé.
				 *
				 * Plus de détails : https://ionicframework.com/docs/api/components/alert/AlertController/
				 */
				let alert = this.alertCtrl.create({
					title: 'Erreur de chargement',
					subTitle: 'Liste des articles',
					message: 'Impossible de charger le fichier de données JSON',
					// cssClass: Classes CSS pour personnaliser l'affichage de la pop-up.
					// inputs: Champs de saisie à inclure, descriptible sous forme d'objet comme pour 'buttons'.
					// Chaque bouton peut être décrit juste par un string ou par un objet avec plusieurs propriétés.
					buttons: [{
						text: 'OK',
						role: 'cancel'
					}, {
						text: 'Réessayer',
						// La propriété handler sert à passer une fonction callback qui sera appelée sur le clic.
						handler: () => {
							setTimeout(() => this.loadData());
						}
					}],
					enableBackdropDismiss: true // Vrai par défaut. Si vrai, le bouton 'back' ferme la pop-up.
				});
				// Fonction permettant de déclencher l'affichage à l'écran de la pop-up.
				alert.present();
			}
		});
	}

	/*
	 * Cette fonction est déclenchée lorsque 'blog-navbar' emet l'événement 'onNavigate'.
	 * L'action effectué est un changement de valeur de la propriété 'rootPage' utilisée
	 * en "attribute directive" ( == "property binding" == "@Input()") sur le component 'ion-nav'.
	 */
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
		// Lorsqu'une valeur de 'this' est changée, Angular détecte un changement de propriété et relance
		// un cycle de détection de changement (grâce au service ChangeDetectorRef). Cela entraine une 
		// réévaluation des expressions dans les différentes templates HTML.
	}
}

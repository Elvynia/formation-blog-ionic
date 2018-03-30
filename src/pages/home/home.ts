import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	/*
	 * Le service NavController est fourni par l'utilisation de l'élément 'ion-nav' (c.f. ../../app/app.html).
	 * Il permet de gérer les actions de navigation de l'application. Chaque instance de NavController mémorise
	 * un tableau de pages qui constitue à la fois un historique mais aussi une pile (https://fr.wikipedia.org/wiki/Pile_(informatique)).
	 * Chaque instance mémorise aussi la page racine (root) qui reste toujours dans la pile, tout en dessous.
	 * 
	 * Pour les fonctions pop() et setRoot(..), voir ../edit/edit.ts.
	 *
	 * Plus de détails : https://ionicframework.com/docs/api/navigation/NavController/
	 */
	constructor(public navCtrl: NavController) { }

	goToList() {
		// La fonction push(..) permet d'ajouter une page à la pile de navigation. Cette nouvelle page
		// devient alors la "tête" (tout en haut) de la pile, c'est à dire la page courante. Une fois
		// qu'un push a été effectué (et SEULEMENT une fois qu'au moins 1 push a été effectué), il est
		// possible d'appeler la fonction pop() (== "dépiler") pour revenir en arrière d'une page dans
		// la pile. Si la fonction setRoot(..) est appelé, la pile actuelle est détruite et une nouvelle
		// pile est crée avec uniquement la nouvelle page racine.
		this.navCtrl.push(ListPage);
	}
}

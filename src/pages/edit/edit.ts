import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Article } from 'betterblog';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
	selector: 'page-edit',
	templateUrl: 'edit.html',
})
export class EditPage {
	editArticle: Article;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.editArticle = this.navParams.data.edit || new Article();
	}

	/*
	 * Cette fonction est déclenchée sur les événements 'onCreate' et 'onUpdate' du component Article. 
	 * 
	 * La fonction canGoBack() permet de savoir il la taille de la pile permet de revenir en arrière
	 * d'une page. Si c'est possible, alors il faut appeler pop() car c'est que la page précédente
	 * était ListPage (navigué depuis le lien de modification d'un article, fonction modify(..) dans list.ts).
	 * Si on ne peut pas faire précédent, il faut quand même revenir à la liste, on utilise donc setRoot pour
	 * remettre la pile navigation à zéro depuis ListPage.
	 */
	private handleNav() {
		if (this.navCtrl.canGoBack()) {
			this.navCtrl.pop();
		} else {
			this.navCtrl.setRoot(ListPage);
		}
	}

}

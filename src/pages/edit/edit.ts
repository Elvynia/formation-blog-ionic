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

	create(article: Article) {
		this.navCtrl.getPrevious().data.create = article;
		this.handleNav();
	}

	update(article: Article) {
		this.navCtrl.getPrevious().data.update = article;
		this.navCtrl.getPrevious().data.edit = undefined;
		this.handleNav();
	}

	private handleNav() {
		if (this.navCtrl.length() > 1) {
			this.navCtrl.pop();
		} else {
			this.navCtrl.setRoot(ListPage);
		}
	}

}

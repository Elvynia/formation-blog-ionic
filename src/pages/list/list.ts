import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticleService, Article } from 'betterblog';
import { EditPage } from '../edit/edit';

@IonicPage()
@Component({
	selector: 'page-list',
	templateUrl: 'list.html',
})
export class ListPage {
	list: Array<Article>;

	constructor(public navCtrl: NavController, public navParams: NavParams,
		private articleService: ArticleService) {
		this.list = new Array();
	}

	ionViewDidLoad() {
		this.articleService.list().subscribe((list) => {
			this.list = list;
		});
	}

	ionViewDidEnter() {
		let data = this.navParams.data;
		if (data.create) {
			this.list.push(data.create);
			data.create = undefined;
		}
		if (data.update) {
			let index = this.list.findIndex((a) => a.id === data.update.id);
			this.list.splice(index, 1, data.update);
			data.update = undefined;
		}
	}

	modify(id: number, index: number) {
		this.navCtrl.push(EditPage, {
			edit: this.list[index]
		});
	}

	delete(id: number, index: number) {
		this.list.splice(index, 1);
	}
}

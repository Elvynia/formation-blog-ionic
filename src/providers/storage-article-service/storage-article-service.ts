import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';

import { ArticleService, Article } from 'betterblog';

const STORE_KEY_ARTICLES: string = 'ion-blog-articles';

/*
 * Classe enfant de ArticleService afin d'intégrer le chargement et la sauvegarde des articles
 * dans une base de données locale. @ionic/storage gère plusieurs implémentations différentes
 * selon l'environnement d'éxécution web/mobile.
 * 
 * Plus de détails : https://ionicframework.com/docs/storage/
 *
 * p.s. J'ai supprimé le suffixe 'Provider' du nom de classe généré par Ionic.
 */
@Injectable()
export class StorageArticleService extends ArticleService {

	constructor(httpClient: HttpClient, private storage: Storage) {
		super(httpClient);
	}

	/*
	 * La fonction initialize doit être redéfinie pour charger les articles depuis la base de données locale
	 * plutôt que depuis le fichier JSON.
	 */
	public initialize(): Observable<Array<Article>> {
		this.storage.get(STORE_KEY_ARTICLES).then(
			(articles) => this.cache.next(articles),
			(error) => console.error('Cannot load articles from DB : ' + error));
		return this.cache;
	}

	/*
	 * Nouvelle fonction pour pouvoir appeler l'initialize de ArticleService qui va charger le fichier JSON.
	 */
	public loadJSON(): Observable<Array<Article>> {
		return super.initialize();
	}

	/*
	 * Sauvegarde en base de données de la liste des articles en cache.
	 */
	public save() {
		this.storage.set(STORE_KEY_ARTICLES, this.cache.value);
	}

}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

/*
 * Import des librairies JavaScript. Ce style d'import permet d'importer
 * les fichiers '.js' contenant des modules utilisant la déclaration
 * 'module.exports = ...'. Cet import n'est utile qu'une seule fois.
 * Plus de précisions : https://www.typescriptlang.org/docs/handbook/modules.html#import-a-module-for-side-effects-only
 * 
 * Cette manière de procéder est récente et importante à comprendre, 
 * et sera certainement adoptée par Angular (si ce n'est pas déjà le cas).
 * Ce nouveau style d'imports provient de ECMAScript 6 qui tente de 
 * standardiser l'import des modules. On parle donc d'import de module ES6.
 * 
 * Pour avoir accès aux Types et fonctions de ces librairies avec toutes les vérifications
 * TypeScript, il faut installer le package npm '@types/nom_de_la_librairie' correspondant
 * à la librairie en question. Toutes les informations seront alors accessibles sans import
 * supplémentaire.
 * Si le package n'existe pas dans @types, alors il est toujours possible d'utiliser l'import
 * classique 'import * as lib from...'. Ce style d'import sera alors à ajouter en plus dans
 * chaque fichier TypeScript utilisant la librairie. La présence de l'import ce-dessous reste
 * toujours nécessaire.
 */
import 'jquery';
import 'popper.js';
import 'bootstrap';

platformBrowserDynamic().bootstrapModule(AppModule);

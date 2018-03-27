/*
 * Surcharge des tâches de copie de fichiers par les scripts ionic.
 * La présence de ce fichier est précisée dans package.json tout
 * à la fin du fichier (config).
 * Plus de précisions : https://ionicframework.com/docs/developer-resources/app-scripts/
 */
module.exports = {
	// Copie des fichiers de './node_modules/bootstrap' vers 'www/build'.
	copyBootstrap: {    
		src: ['{{ROOT}}/node_modules/bootstrap/dist/css/*'],    
		dest: '{{BUILD}}'    
	}
};

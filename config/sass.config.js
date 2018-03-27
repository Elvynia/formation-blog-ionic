module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'iOS >= 8',
            'Android >= 4.4',
            'Explorer >= 11',
            'ExplorerMobile >= 11'
        ],
        cascade: false
    },
    /* Liste des chemins dans lequels chercher des fichiers CSS/SCSS.
     * Etant donné que la propriété surcharge une propriété existante
     * de la configuration ionic_sass par défaut, il faut lister tous
     * les chemins sans exception. Le chemin doit correspondre à un dossier.
     */
    includePaths: [
		'node_modules/ionic-angular/themes',
    	'node_modules/ionicons/dist/scss',
		'node_modules/ionic-angular/fonts',
		'node_modules/bootstrap/dist/css'
	]
};

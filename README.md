# m1lille1

Les plans du bâtiment M1 de la Faculté des Sciences et Technologies de l'Université Lille (ex. Lille 1).

## La version interactive (HTML5+CSS3+AngularJS)

La version interactive des plans se trouve à l'adresse [ktzanev.github.io/m1lille1](https://ktzanev.github.io/m1lille1/). Elle a été créée avec l'aide de la bibliothèque [AngulagJS](http://angularjs.org).

## Le fichiers originaux (SVG)

Les SVG contenant les plans se trouve dans le répertoire `svg`.
Ils étaient créés à la main à partir des plans de sécurité qui se trouvent dans le bâtiment.
Le fichier `svg.css` contient le style des lignes, des traits et des polices.

## La version PDF

La [version PDF](https://ktzanev.github.io/m1lille1/m1lille1.pdf) a été créé de la façon suivante :

* les fichiers `svg` ont été convertis en `pdf` à l'aide [wkhtmltopdf](https://wkhtmltopdf.org/). Ce sont des fichiers qui font référence à un `css` et donc ne peuvent pas être convertis avec InkScape, par exemple. Avant j'utilisais Chrome pour « imprimer » en pdf.
* le fichier `m1lille1.tex` a été compilé avec XeLaTeX.
* le script [topdf.sh](pdf/topdf.sh) fait tout ça.

## Numérotation des salles

Les salles ont été numérotés en 2019. Vous pouvez trouvez plus d'informations sur cette question dans [la page dédiée](numeros-des-salles.md).

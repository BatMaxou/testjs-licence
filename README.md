# Enoncé

## Sujet 1 :
Vous allez ensemble devoir écrire un programme capable d’enregistrer les mouvements de
la souris sur le navigateur pendant un laps de temps donné.


Si vous le pouvez, reproduisez ensuite ces déplacements en les appliquant à un élément du DOM de votre choix.

## Sujet 2 :
Vous allez ensemble devoir écrire un programme capable de “peupler” une grille du jeu de
démineur. Vous allez recevoir en entrée le tableau suivant :


`const grid = [ [0, ’B’, 0, 0], [0, 0, ’B’, 0], [0, 0, ’B’, ’B’], [0, 0, 0, 0] ];`


…que l’on peut représenter ainsi :


0B00
00B0
00BB
0000

Les cellules du tableau contenant la valeur “B” représentent les bombes.

Votre programmedevra renvoyer le tableau suivant :


`const grid = [ [1, ’B’, 2, 1], [1, 3, ’B’, 3], [0, 2, ’B’, ’B’], [0, 1, 2, 2] ];`


…que l’on peut représenter ainsi :


1B21
03B3
02BB
0122


Chaque chiffre que votre programme ajoutera dans le tableau indiquera le nombre de bombes présentes dans les cellules adjacentes.
/*
Denní doba

Nechte uživatele zadat, kolik je hodin (jen celé číslo mezi 0-23).

Jedná-li se o hodiny 0-11, budeme je považovat za “ráno a dopoledne”.
12-23 budeme brát jako “odpoledne a večer”.

Použijte ternární operátor a interpolaci textových řetězců a do konzole napište text ve tvaru:
Je 7 hodin, přejeme krásné ráno a dopoledne.
*/

const hodina = Number(prompt('Kolik je hodin? (celé číslo 0 - 23)'));
console.log(`Je ${hodina} hodin, přejeme krásné ${hodina < 12 ? 'ráno a dopoledne' : 'odpoledne a večer'}`);
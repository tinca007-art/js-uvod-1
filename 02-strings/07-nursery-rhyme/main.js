/*
V kódu máíte nadefinovaný textový řetězec s dětskou říkankou:

Nechte uživatele pomocí `prompt()` zadat zvíře a do konzole vypište `true` nebo `false` podle toho, zda zvíře v říkance vystupuje nebo ne.

🦊 **Bonus 1:** Pozor na to, že některá zvářata mohou být v říkance napsána s velkým písmenem na začátku, ale uživatel může stejné zvíře napsat s malým písmenem na začátku. Zajistěte, aby to program napsal správnou odpověď nezávisle na tom, jakými písmeny uživatel zvíře zadá.

Takže i při zadání `'žirafa'` nebo `'LišKA'` program správně vypíše `true`.

🦒 **Bonus 2:** Často se stane, že uživatel při zadávání do vstupního pole omylem napíše mezeru na začátek nebo konec textu. Zajistěte, aby program tyto mezery nejprve odstranil, než bude zjišťovat, zda se zadané zvíře v textu vyskytuje.

Takže i při zadání ' medvěd   ' program správně vypíše `true`.
*/

const rikanka = `
  Žirafa je tuze dlouhá,
  do nebe jí hlava čouhá.
  Sedí liška pod dubem,
  má píšťalku a buben.
  Lední medvěd, krásně bílý,
  mívá často dlouhou chvíli.
`;
const zvire = prompt('Zadej zvíře')
console.log(`${rikanka.toLowerCase().includes(zvire)}`);






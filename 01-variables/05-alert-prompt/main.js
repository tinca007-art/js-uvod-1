// alert -> vyskakovací okno s nějakou zprávou, upozornění pro uživatele
// nemodální okna

alert('Ahoj'); 

// prompt -> vyskakovací okno, které se na něco ptá a to co zadá se objeví v konzoli

const jmeno = prompt('Zadej své jméno');
console.log(jmeno);

const vek = Number(prompt('Zadej svůj věk')); // převedeno na číslo, jinak vždy převede na text
console.log(vek);

// confirm -> používá se na potvrzování

const souhlas = confirm('Chceš opravdu skončit?') // ok je true, zrušit je false

// v reálu se moc nepoužívají, nejdou stylovat
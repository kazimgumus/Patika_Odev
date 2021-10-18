const arguments = process.argv.slice(2);

function daire(r){
    daireAlan=Math.PI*r*r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${daireAlan}`);
}
daire(arguments[0]*1);

function palindrom(str){
    let cuvant2 = reversedstring(str);
    if(str === cuvant2){
        return true;
    }
    else{
        return false;
    }
}
let cuvant = 'ana';
console.log(palindrom(str));

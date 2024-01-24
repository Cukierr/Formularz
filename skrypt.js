let imie = document.getElementById('imie')
let werimie = document.getElementById('werimie')
let haslo = document.getElementById('haslo')
let werhaslo = document.getElementById('werhaslo')
let wiek = document.getElementById('wiek')
let werwiek = document.getElementById('werwiek')
let email = document.getElementById('email')
let weremail = document.getElementById('weremail')
let adres = document.getElementById('adres')
let weradres= document.getElementById('weradres')
let kodPocztowy = document.getElementById('kodPocztowy')
let werkodPocztowy = document.getElementById('werkodPocztowy')
let powhaslo = document.getElementById('powhaslo')
let werpowhaslo = document.getElementById('werpowhaslo')

const litera = new RegExp('^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŻżŹź ]{1,}$');
const liczba = new RegExp('^[0-9]{1,}$');
const niespecjalny = new RegExp('^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŻżŹź 0-9/]{1,}$');
const duza = new RegExp('[AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŻŹ]');
const regeximie = new RegExp('^[ABCDEFGHIJKLŁMNOPRSŚTUWYZŻ]{1}[aąbcćdeęfghijklłmnńoóprsśtuwyzźż ]{2,}$');
const regexemail = new RegExp('^[a-z0-9.]{2,}@[a-z]{2,10}.[a-z]{2,4}$')
const regextelefon = new RegExp('^([0-9]{3} [0-9]{3} [0-9]{3}|[0-9]{9}|\\+[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}|\\+[0-9]{11})$');
const regexadres = new RegExp('^[AaąBbCcćDdEeęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŻżŹź 0-9]{3,59} [0-9]{1,3}([A-Z]{1,4})?(\/[0-9]{1,3})? [AaąBbCcćDdEeęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŻżŹź ]{2,58}$')
const regexkodPocztowy = new RegExp('^[0-9]{2}-[0-9]{3}$')
const mala = new RegExp('[aąbcćdeęfghijklłmnńoóprsśtuwyzźż]')
const cyfra = new RegExp('[0-9]');
const specjalny = new RegExp('[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^_\`\{\|\}\~]');
imie.addEventListener('blur', function(){
    if(imie.value != ''){
        if(imie.value.length >=3){
            if(imie.value.length <= 32){
                if(litera.test(imie.value)){
                    if(duza.test(imie.value[0])){
                        if(regeximie.test(imie.value)){
                            werimie.innerHTML = ''
                        }
                        else{
                            werimie.innerHTML = 'Tylko pierwsza litera imienia może być duża'
                        }
                    }
                    else{
                        werimie.innerHTML = 'Imię musi zaczynać się z dużej litery'
                    }
                }
                else{
                    werimie.innerHTML = 'Imię nie może zawierać cyfr i znaków specjalnych'
                }
            }
            else{
                werimie.innerHTML = 'Imię jest za długie'
            }
        }
        else{
            werimie.innerHTML = 'Imię jest za krótkie'
        }
    }
    else{
        werimie.innerHTML = ''
    }
})
nazwisko.addEventListener('blur', function(){
    if(nazwisko.value != ''){
        if(nazwisko.value.length >=3){
            if(nazwisko.value.length <= 50){
                if(litera.test(nazwisko.value)){
                    if(duza.test(nazwisko.value[0])){
                        if(regeximie.test(nazwisko.value)){
                            wernazwisko.innerHTML = ''
                        }
                        else{
                            wernazwisko.innerHTML = 'Tylko pierwsza litera nazwiska może być duża'
                        }
                    }
                    else{
                        wernazwisko.innerHTML = 'Nazwisko musi zaczynać się z dużej litery'
                    }
                }
                else{
                    wernazwisko.innerHTML = 'Nazwisko nie może zawierać cyfr i znaków specjalnych'
                }
            }
            else{
                wernazwisko.innerHTML = 'Nazwisko jest za długie'
            }
        }
        else{
            wernazwisko.innerHTML = 'Nazwisko jest za krótkie'
        }
    }
    else{
        wernazwisko.innerHTML = ''
    }
})
wiek.addEventListener('blur', function(){
    if(wiek.value != ''){
        if(wiek.value >= 0){
            if(wiek.value <= 120){
                if(liczba.test(wiek.value)){
                    werwiek.innerHTML = ''
                }
                else{
                    werwiek.innerHTML = 'Wiek nie może być liczbą zmiennoprzecinkową'
                }
            }
            else{
                werwiek.innerHTML = 'Wiek nie może być większy od 120'
            }
        }
        else{
            werwiek.innerHTML = 'Wiek nie może być liczbą ujemną'
        }
    }
    else{
        werwiek.innerHTML = ''
    }
})
email.addEventListener('blur', function(){
    if(email.value != ''){
        if(regexemail.test(email.value)){
            weremail.innerHTML = ''
        }
        else{
            weremail.innerHTML = 'To nie jest poprawny adres email'
        }
    }
    else{
        weremail.innerHTML = ''
    }
})
telefon.addEventListener('blur', function(){
    if(telefon.value != ''){
        if(regextelefon.test(telefon.value)){
            wertelefon.innerHTML = ''
        }
        else{
            wertelefon.innerHTML = 'To nie jest poprawny numer telefou'
        }
    }
    else{
        wertelefon.innerHTML = ''
    }
})
adres.addEventListener('blur', function(){
    if(adres.value != ''){
        if(niespecjalny.test(adres.value)){
            if(regexadres.test(adres.value)){
                weradres.innerHTML = ''
            }
            else{
                weradres.innerHTML = 'To nie jest poprawny adres'
            }
        }
        else{
            weradres.innerHTML = 'Adres nie może zawierać znaków specjanych innych niż /'
        }
    }
    else{
        weradres.innerHTML = ''
    }
})
kodPocztowy.addEventListener('blur', function(){
    if(kodPocztowy.value != ''){
        if(regexkodPocztowy.test(kodPocztowy.value)){
            werkodPocztowy.innerHTML = ''
        }
        else{
            werkodPocztowy.innerHTML = 'To nie jest poprawny kod pocztowy'
        }
    }
    else{
        werkodPocztowy.innerHTML = ''
    }
})
haslo.addEventListener('blur', function(){
    if(haslo.value != ''){
        if(haslo.value.length >= 6){
            if(duza.test(haslo.value)&&mala.test(haslo.value)&&cyfra.test(haslo.value)&&specjalny.test(haslo.value)){
                if(werhaslo.innerHTML != 'Słabe hasło' && werhaslo.innerHTML != 'Średnie hasło' && werhaslo.innerHTML != 'Mocne hasło'){
                    werhaslo.innerHTML = ''
                }
            }
            else{
                werhaslo.innerHTML = 'Hasło musizawierać małą i dużą literę, cyfre oraz znak specjalny'
                werhaslo.style.color = 'red'
            }
        }
        else{
            werhaslo.innerHTML = 'Hasło musi posiadać co najmniej 6 znaków'
            werhaslo.style.color = 'red'
        }
    }
    else{
        werhaslo.innerHTML = ''
    }
})
haslo.addEventListener('input', function(){
    if(haslo.value != ''){
        if(haslo.value.length >= 6){
            if(duza.test(haslo.value)&&mala.test(haslo.value)&&cyfra.test(haslo.value)&&specjalny.test(haslo.value)){
                if(haslo.value.length < 8){
                    werhaslo.innerHTML = 'Słabe hasło'
                    werhaslo.style.color = 'orange'
                }
                else if(haslo.value.length >= 8 && haslo.value.length < 12){
                    werhaslo.innerHTML = 'Średnie hasło'
                    werhaslo.style.color = 'yellow'
                }
                else{
                    werhaslo.innerHTML = 'Mocne hasło'
                    werhaslo.style.color = 'green'
                }
            }
            else if(werhaslo.innerHTML == 'Słabe hasło' || werhaslo.innerHTML == 'Średnie hasło' || werhaslo.innerHTML == 'Mocne hasło'){
                werhaslo.innerHTML = 'Hasło musizawierać małą i dużą literę, cyfre oraz znak specjalny'
                werhaslo.style.color = 'red'
            }
        }
        else if(werhaslo.innerHTML == 'Słabe hasło' || werhaslo.innerHTML == 'Średnie hasło' || werhaslo.innerHTML == 'Mocne hasło'){
            werhaslo.innerHTML = 'Hasło musi posiadać co najmniej 6 znaków'
            werhaslo.style.color = 'red'
        }
    }
    else{
        werhaslo.innerHTML = ''
        werhaslo.style.color = 'red'
    }
})
powhaslo.addEventListener('blur', function(){
    if(powhaslo.value != ''){
        if(powhaslo.value == haslo.value){
            werpowhaslo.innerHTML = ''
        }
        else{
            werpowhaslo.innerHTML = 'Hasłą nie są takie same'
        }
    }
    else{
        werpowhaslo.innerHTML = ''
    }
})

document.getElementById('pokaz').addEventListener("click", function(){
    let xd = document.querySelector('#pokaz span');
    if(xd.style.width == '16px'){
        xd.style.width = '0px'
        xd.style.height = '0px'
        haslo.type = 'password';
    }
    else{
        xd.style.width = '16px'
        xd.style.height = '16px'
        haslo.type = 'text';
    }
})
document.getElementById('formularz').addEventListener("submit", function(event){
    event.preventDefault();
    if(regeximie.test(imie.value)&&imie.value.length<=32&&regeximie.test(nazwisko.value)&&imie.value.length<=50&&liczba.test(wiek.value)&&wiek.value>=0&&wiek.value<=120&&regexemail.test(email.value)&&regextelefon.test(telefon.value)&&regexadres.test(adres.value)&&regexkodPocztowy.test(kodPocztowy.value)&&duza.test(haslo.value)&&mala.test(haslo.value)&&cyfra.test(haslo.value)&&specjalny.test(haslo.value)&&haslo.value.length >= 6&&powhaslo.value == haslo.value&&imie.value != ''&&nazwisko.value != ''&&wiek.value != ''&&email.value != ''&&telefon.value != ''&&adres.value != ''&&kodPocztowy.value != ''&&haslo.value != ''&&powhaslo.value != ''){
        const moveTo = new MoveTo();
        moveTo.move(document.querySelector('footer'));
        document.getElementById("xdimie").innerHTML = imie.value;
        document.getElementById("xdnazwisko").innerHTML = nazwisko.value;
        document.getElementById("xdwiek").innerHTML = wiek.value;
        document.getElementById("xdemail").innerHTML = email.value;
        document.getElementById("xdtelefon").innerHTML = telefon.value;
        document.getElementById("xdadres").innerHTML = adres.value;
        document.getElementById("xdkodpocztowy").innerHTML = kodPocztowy.value;
    }
    else{
        document.getElementById("zwrot").innerHTML = 'Wszystkie pola nie są wypełnione poprwawnie';
    }
})
window.addEventListener("load", function(){
    const moveTo = new MoveTo({
        tolerance: 0,
        duration: 0,
        easing: 'easeOutQuart',
        container: window,
      });;

    moveTo.move(document.querySelector('main'));
})
console.log('Działa');

/* 
po kliknięciu wykonaj ma byc powitanie 'witaj Panie Pani w zależności od sex i tu imie (lat: wiek
    wybierz działanie jakie chcesz wykonać
 formularz, w któym use poda imie, wiek, płeć  i wykonać działanie na liczbę

*/


let $checkInfo = document.querySelector('.checkInfo');

function displayInfo() {
    let $input = document.querySelector('.inputName').value;
    let $age = document.querySelector('.inputAge').value;
    let $sexMen = document.querySelector('.sexMen').checked;
    let $sexWoman = document.querySelector('.sexWoman').checked;
    let $p = document.querySelector('p');
    console.log($input);
    console.log($age);
    console.log($sexMen);
    console.log($sexWoman);
    console.log('Test button');

    if ($input.length === 0) {
        $p.textContent = 'Podaj imie!!!';
        return;
    }
    if ($age.length === 0) {
        $p.textContent = 'Podaj wiek!!!';
        return;
    }
    if (($sexMen && $sexWoman) === false) {
        $p.textContent = 'Wybierz płeć';
        return;
    }

    if ($sexMen) {
        console.log();
        $p.textContent = 'Witaj Panie ' + $input + '. Masz ' + $age + ' lata.';
        //wyswietl dane
    } else if ($sexWoman) {
        $p.textContent = 'Witaj Pani ' + $input + '. Masz ' + $age + ' lata.';
        //wyswietl dane
    } else {
        $p.textContent = 'Podaj dane';
    }

    dzialanie();
}

$checkInfo.addEventListener('click', displayInfo);
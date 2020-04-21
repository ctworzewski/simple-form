console.log('Działa');

/* 
po kliknięciu wykonaj ma byc powitanie 'witaj Panie Pani w zależności od sex i tu imie (lat: wiek
    wybierz działanie jakie chcesz wykonać
 formularz, w któym use poda imie, wiek, płeć  i wykonać działanie na liczbę

*/


let $checkInfo = document.querySelector('.checkInfo');
let $wrapper_calc = document.querySelector('.wrapper-calculator');
let $wyliczDzialanie = document.querySelector('.wyliczDzialanie');

$wrapper_calc.style.display = 'none';

function displayInfo() {
    let $input = document.querySelector('.inputName').value;
    let $age = document.querySelector('.inputAge').value;
    let $sexMen = document.querySelector('.sexMen').checked;
    let $sexWoman = document.querySelector('.sexWoman').checked;
    let $p = document.querySelector('p');
    let $wrapper = document.querySelector('.wrapper');

    if ($input.length === 0) {
        $p.textContent = 'Podaj imie!!!';
        return;
    }
    if ($age.length === 0) {
        $p.textContent = 'Podaj wiek!!!';
        return;
    }
    if ((!$sexMen && !$sexWoman)) {
        $p.textContent = 'Wybierz płeć';
        return;
    }

    if ($sexMen) {
        $p.textContent = 'Witaj Panie ' + $input + '. Masz ' + $age + ' lata.';
    } else if ($sexWoman) {
        $p.textContent = 'Witaj Pani ' + $input + '. Masz ' + $age + ' lata.';
    } else {
        $p.textContent = 'Podaj dane';
    }
    $wrapper.style.display = 'none';
    $wrapper_calc.style.display = 'block';
}

function calculator() {
    let $number1 = document.querySelector('.number1').value;
    let $number2 = document.querySelector('.number2').value;
    let $showResult = document.querySelector('.showResult');
    let result = undefined;
    let $choice = document.querySelector('#rodzajDzialania').value;

    if ($choice === '+') {
        result = Number($number1) + Number($number2);
    } else if ($choice === '-') {
        result = $number1 - $number2;
    } else if ($choice === '*') {
        result = $number1 * $number2;
    } else if ($choice === '/') {
        result = $number1 / $number2;
    }
    $showResult.textContent = result;
}

$wyliczDzialanie.addEventListener('click', calculator);
$checkInfo.addEventListener('click', displayInfo);
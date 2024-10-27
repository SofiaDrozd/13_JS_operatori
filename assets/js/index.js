// 1)
const first = Number(prompt('Введіть перше число: '));
const second = Number(prompt('Введіть друге число: '));
const sum = first + second; 

if (sum%5===0) {
    alert('Сума введених чисел кратна 5');
} else {
    alert('Сума введених чисел не кратна 5');
}

// 2)
const side = Number(prompt('Введіть сторону квадрата: '));
if (side) {
    alert(side**2);
}

// 3)
const menu = Number(prompt(' 1 - Чай\n 2 - Кава\n 3 - Сік\n 4 - Вода'));
if (menu===1) {
    alert ('Ви обрали чай');
} else if (menu===2) {
    alert ('Ви обрали каву');
} else if (menu===3) {
    alert ('Ви обрали сік');
} else if (menu===4) {
    alert ('Ви обрали воду'); 
} else {
    alert ('Такого напою у нас немає');
}

// 4)
const sum1 = Number(prompt('Введіть суму покупки:'));
if (sum1 >= 500 && sum1 <=799) {
    const disc1 = Number(sum1 * (3/100));
    const res1 = Number(sum1 - disc1);
    alert (res1);
} else if (sum1 >= 800 ) {
    const disc2 = Number(sum1 * (5/100));
    const res2 = Number(sum1 - disc2);
    alert (res2);
} else {
    alert ('У Вас немає знижки')
}

// 5)
const a = Number(prompt('Введіть перше число:'));
const b = Number(prompt('Введіть друге число:'));
const result = a % b === 0;
if (result) {
    alert(true);
} else {
    alert(false);
}

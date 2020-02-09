let shoppingList = [
    { name: "Молоко", amount: 2, buyStatus: true },
    { name: "Мука", amount: 3, buyStatus: false },
    { name: "Хлеб", amount: 1, buyStatus: false },
    { name: "Яйца", amount: 10, buyStatus: true },
    { name: "Масло", amount: 2, buyStatus: true }
];

document.getElementById('form-group').removeAttribute("hidden");
document.getElementById('listBlock').removeAttribute('hidden');

document.getElementById('btns').style.display = 'none';

let checkedEmoji = String.fromCodePoint(0x2714),
    unCheckedEmoji = String.fromCodePoint(0x2716)

let list = document.getElementById('list'),
    checkBlock = ``;

let newArray = [];

function showList(shoppingList) {

    for (let i = 0; i < shoppingList.length; i++) {

        if (shoppingList[i].buyStatus) {
            newArray.unshift(shoppingList[i]);
        } else {
            newArray.push(shoppingList[i]);
        }
    }

    for (let j = 0; j < newArray.length; j++) {
        let message = '';
        if (newArray[j].buyStatus) {
            message = checkedEmoji;
        } else {
            message = unCheckedEmoji;
        }
        checkBlock = `<ul><li>${newArray[j].name} - ${newArray[j].amount} шт. ${message}</li></ul>`;
        list.innerHTML = list.innerHTML + checkBlock;
    }
}

function addNewItem() {

    let newName = document.getElementById('name').value;
    let newAmount = document.getElementById('amount').value;

    newArray.push({ name: newName, amount: newAmount, buyStatus: false })

    console.log(newArray)

    let message = '';
    for (let j = 0; j < newArray.length; j++) {

        if (newArray[j].buyStatus) {
            message = checkedEmoji;
        } else {
            message = unCheckedEmoji;
        }
    }

    checkBlock = `<ul><li>${newArray[newArray.length - 1].name} - ${newArray[newArray.length - 1].amount} шт. ${message}</li></ul>`;
    list.innerHTML += checkBlock;
}

function checkTheItem() {
    let checkedItem = ''
    checkedItem = document.getElementById('check').value;

    let message = '';

    let checkBlock = '';
    for (let c = 0; c < newArray.length; c++) {

        if (newArray[c].name.indexOf(checkedItem) != -1) {
            newArray[c].buyStatus = true
        }

        if (newArray[c].buyStatus) {
            message = checkedEmoji;
        } else {
            message = unCheckedEmoji;
        }

        checkBlock += `<ul><li>${newArray[c].name} - ${newArray[c].amount} шт. ${message}</li></ul>`;
    }

    list.innerHTML = checkBlock;
}

showList(shoppingList)



/* Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/
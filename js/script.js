// ДАННЫЕ ИЗ ТАБЛИЦЫ СТРЕЛЬБЫ | Заряд 2 (bt - base table)
             //1   2   3   4   5   6   7   8   9

let bt_Z;
let bt_Zw;
let bt_Xw;
let bt_Xn;
let bt_Xt;
let bt_Xtz;
let bt_Xvo;
let bt_Ybul;

let g_D_grp = [];
let g_D_sum = [];
let g_Ugl_sum = [];

const tableWingBallistic = [
    [0, [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0], [-8, 0], [-9, 0], [-10, 0], [-11, 0], [-12, 0], [-13, 0], [-14, 0], [-15, 0], [-16, 0], [-17, 0], [-18, 0], [-19, 0], [-20, 0]],
    [0, [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 1], [-6, 1], [-7, 1], [-8, 1], [-9, 1], [-10, 1], [-11, 1], [-12, 1], [-13, 1], [-14, 1], [-15, 2], [-16, 2], [-17, 2], [-18, 2], [-19, 2], [-20, 2]],
    [0, [-1, 0], [-2, 0], [-3, 1], [-4, 1], [-5, 1], [-6, 1], [-7, 1], [-8, 2], [-9, 2], [-10, 2], [-11, 2], [-12, 2], [-13, 3], [-14, 3], [-15, 3], [-16, 3], [-17, 4], [-18, 4], [-19, 4], [-20, 4]],
    [0, [-1, 0], [-2, 1], [-3, 1], [-4, 1], [-5, 2], [-6, 2], [-7, 2], [-8, 2], [-9, 3], [-10, 3], [-10, 3], [-11, 4], [-12, 4], [-13, 4], [-14, 5], [-15, 5], [-16, 5], [-17, 6], [-18, 6], [-19, 6]],
    [0, [-1, 0], [-2, 1], [-3, 1], [-4, 2], [-5, 2], [-5, 2], [-6, 3], [-7, 3], [-8, 4], [-9, 4], [-10, 4], [-11, 5], [-12, 5], [-13, 6], [-14, 6], [-15, 7], [-16, 7], [-16, 7], [-17, 8], [-18, 8]],
    [0, [-1, 1], [-2, 1], [-3, 2], [-3, 2], [-4, 3], [-5, 3], [-6, 4], [-7, 4], [-8, 5], [-9, 5], [-10, 6], [-10, 6], [-11, 7], [-12, 7], [-13, 8], [-14, 8], [-15, 9], [-16, 9], [-16, 10], [-17, 10]],
    [0, [-1, 1], [-2, 1], [-2, 2], [-3, 2], [-4, 3], [-5, 4], [-6, 4], [-6, 5], [-7, 5], [-8, 6], [-9, 6], [-10, 7], [-11, 8], [-11, 8], [-12, 9], [-13, 9], [-14, 10], [-15, 11], [-15, 11], [-16, 12]],
    [0, [-1, 1], [-1, 1], [-2, 2], [-3, 3], [-4, 3], [-4, 4], [-5, 5], [-6, 5], [-7, 6], [-7, 7], [-8, 7], [-9, 8], [-10, 9], [-10, 9], [-11, 10], [-12, 11], [-13, 11], [-13, 12], [-14, 13], [-15, 13]],
    [0, [-1, 1], [-1, 1], [-2, 2], [-3, 3], [-3, 4], [-4, 4], [-5, 5], [-5, 6], [-6, 7], [-7, 7], [-7, 8], [-8, 9], [-9, 10], [-9, 10], [-10, 11], [-11, 12], [-11, 13], [-12, 13], [-13, 14], [-13, 15]],
    [0, [-1, 1], [-1, 2], [-2, 2], [-2, 3], [-3, 4], [-4, 5], [-4, 6], [-5, 6], [-5, 7], [-6, 8], [-6, 9], [-7, 10], [-8, 11], [-8, 11], [-9, 12], [-9, 13], [-10, 14], [-11, 15], [-11, 15], [-12, 16]],
    [0, [0, 1], [-1, 2], [-2, 3], [-2, 3], [-3, 4], [-3, 5], [-4, 6], [-4, 7], [-5, 8], [-5, 9], [-6, 10], [-6, 10], [-6, 11], [-7, 12], [-8, 13], [-8, 14], [-9, 15], [-9, 16], [-10, 16], [-10, 17]],
    [0, [0, 1], [-1, 2], [-1, 3], [-2, 4], [-2, 5], [-2, 5], [-3, 6], [-3, 7], [-4, 8], [-4, 9], [-4, 10], [-5, 11], [-5, 12], [-6, 13], [-6, 14], [-7, 15], [-7, 16], [-7, 16], [-8, 17], [-8, 18]],
    [0, [0, 1], [-1, 2], [-1, 3], [-1, 4], [-2, 5], [-2, 6], [-2, 7], [-2, 8], [-3, 9], [-3, 10], [-3, 10], [-4, 11], [-4, 12], [-4, 13], [-5, 14], [-5, 15], [-5, 16], [-6, 17], [-6, 18], [-6, 19]],
    [0, [0, 1], [0, 2], [-1, 3], [-1, 4], [-1, 5], [-1, 6], [-1, 7], [-2, 8], [-2, 9], [-2, 10], [-2, 11], [-2, 12], [-3, 13], [-3, 14], [-3, 15], [-3, 16], [-4, 17], [-4, 18], [-4, 19], [-4, 20]],
    [0, [0, 1], [0, 2], [0, 3], [0, 4], [-1, 5], [-1, 6], [-1, 7], [-1, 8], [-1, 9], [-1, 10], [-1, 11], [-1, 12], [-1, 13], [-1, 14], [-2, 15], [-2, 16], [-2, 17], [-2, 18], [-2, 19], [-2, 20]],
    [0, [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19], [0, 20]],


    [0, [0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13], [1, 14], [2, 15], [2, 16], [2, 17], [2, 18], [2, 19], [2, 20]],
    [0, [0, 1], [0, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12], [3, 13], [3, 14], [3, 15], [3, 16], [4, 17], [4, 18], [4, 19], [4, 20]],
    [0, [0, 1], [1, 2], [1, 3], [1, 4], [2, 5], [2, 6], [2, 7], [2, 8], [3, 9], [3, 10], [3, 10], [4, 11], [4, 12], [4, 13], [5, 14], [5, 15], [5, 16], [6, 17], [6, 18], [6, 19]],
    [0, [0, 1], [1, 2], [1, 3], [2, 4], [2, 5], [2, 5], [3, 6], [3, 7], [4, 8], [4, 9], [4, 10], [5, 11], [5, 12], [6, 13], [6, 14], [7, 15], [7, 16], [7, 16], [8, 17], [8, 18]],
    [0, [0, 1], [1, 2], [2, 3], [2, 3], [3, 4], [3, 5], [4, 6], [4, 7], [5, 8], [5, 9], [6, 10], [6, 10], [6, 11], [7, 12], [8, 13], [8, 14], [9, 15], [9, 16], [10, 16], [10, 17]],
    [0, [1, 1], [1, 2], [2, 2], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6], [5, 7], [6, 8], [6, 9], [7, 10], [8, 11], [8, 11], [9, 12], [9, 13], [10, 14], [11, 15], [11, 15], [12, 16]],
    [0, [1, 1], [1, 1], [2, 2], [3, 3], [3, 4], [4, 4], [5, 5], [5, 6], [6, 7], [7, 7], [7, 8], [8, 9], [9, 10], [9, 10], [10, 11], [11, 12], [11, 13], [12, 13], [13, 14], [13, 15]],
    [0, [1, 1], [1, 1], [2, 2], [3, 3], [4, 3], [4, 4], [5, 5], [6, 5], [7, 6], [7, 7], [8, 7], [9, 8], [10, 9], [10, 9], [11, 10], [12, 11], [13, 11], [13, 12], [14, 13], [15, 13]],
    [0, [1, 1], [2, 1], [2, 2], [3, 2], [4, 3], [5, 4], [6, 4], [6, 5], [7, 5], [8, 6], [9, 6], [10, 7], [11, 8], [11, 8], [12, 9], [13, 9], [14, 10], [15, 11], [15, 11], [16, 12]],
    [0, [1, 1], [2, 1], [3, 2], [3, 2], [4, 3], [5, 3], [6, 4], [7, 4], [8, 5], [9, 5], [10, 6], [10, 6], [11, 7], [12, 7], [13, 8], [14, 8], [15, 9], [16, 9], [16, 10], [17, 10]],
    [0, [1, 0], [2, 1], [3, 1], [4, 2], [5, 2], [5, 2], [6, 3], [7, 3], [8, 4], [9, 4], [10, 4], [11, 5], [12, 5], [13, 6], [14, 6], [15, 7], [16, 7], [16, 7], [17, 8], [18, 8]],
    [0, [1, 0], [2, 1], [3, 1], [4, 1], [5, 2], [6, 2], [7, 2], [8, 2], [9, 3], [10, 3], [10, 3], [11, 4], [12, 4], [13, 4], [14, 5], [15, 5], [16, 5], [17, 6], [18, 6], [19, 6]],
    [0, [1, 0], [2, 0], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 3], [14, 3], [15, 3], [16, 3], [17, 4], [18, 4], [19, 4], [20, 4]],
    [0, [1, 0], [2, 0], [3, 0], [4, 0], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 2], [16, 2], [17, 2], [18, 2], [19, 2], [20, 2]],
    [0, [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0]],

    [0, [1, 0], [2, 0], [3, 0], [4, 0], [5, -1], [6, -1], [7, -1], [8, 1], [9, -1], [10, -1], [11, -1], [12, -1], [13, -1], [14, -1], [15, -2], [16, -2], [17, -2], [18, -2], [19, -2], [20, -2]],
    [0, [1, 0], [2, 0], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -2], [9, -2], [10, -2], [11, -2], [12, -2], [13, -3], [14, -3], [15, -3], [16, -3], [17, -4], [18, -4], [19, -4], [20, -4]],
    [0, [1, 0], [2, -1], [3, -1], [4, -1], [5, -2], [6, -2], [7, -2], [8, -2], [9, -3], [10, -3], [10, -3], [11, -4], [12, -4], [13, -4], [14, -5], [15, -5], [16, -5], [17, -6], [18, -6], [19, -6]],
    [0, [1, 0], [2, -1], [3, -1], [4, -2], [5, -2], [5, -2], [6, -3], [7, -3], [8, -4], [9, -4], [10, -4], [11, -5], [12, -5], [13, -6], [14, -6], [15, -7], [16, -7], [16, -7], [17, -8], [18, -8]],
    [0, [1, -1], [2, -1], [3, -2], [3, -2], [4, -3], [5, -3], [6, -4], [7, -4], [8, -5], [9, -5], [10, -6], [10, -6], [11, -7], [12, -7], [13, -8], [14, -8], [15, -9], [16, -9], [16, -10], [17, -10]],
    [0, [1, -1], [2, -1], [2, -2], [3, -2], [4, -3], [5, -4], [6, -4], [6, -5], [7, -5], [8, -6], [9, -6], [10, -7], [11, -8], [11, -8], [12, -9], [13, -9], [14, -10], [15, -11], [15, -11], [16, -12]],
    [0, [1, -1], [1, -1], [2, -2], [3, -3], [4, -3], [4, -4], [5, -5], [6, -5], [7, -6], [7, -7], [8, -7], [9, -8], [10, -9], [10, -9], [11, -10], [12, -11], [13, -11], [13, -12], [14, -13], [15, -13]],
    [0, [1, -1], [1, -1], [2, -2], [3, -3], [3, -4], [4, -4], [5, -5], [5, -6], [6, -7], [7, -7], [7, -8], [8, -9], [9, -10], [9, -10], [10, -11], [11, -12], [11, -13], [12, -13], [13, -14], [13, -15]],
    [0, [1, -1], [1, -2], [2, -2], [2, -3], [3, -4], [4, -5], [4, -6], [5, -6], [5, -7], [6, -8], [6, -9], [7, -10], [8, -11], [8, -11], [9, -12], [9, -13], [10, -14], [11, -15], [11, -15], [12, -16]],
    [0, [0, -1], [1, -2], [2, -3], [2, -3], [3, -4], [3, -5], [4, -6], [4, -7], [5, -8], [5, -9], [6, -10], [6, -10], [6, -11], [7, -12], [8, -13], [8, -14], [9, -15], [9, -16], [10, -16], [10, -17]],
    [0, [0, -1], [1, -2], [1, -3], [2, -4], [2, -5], [2, -5], [3, -6], [3, -7], [4, -8], [4, -9], [4, -10], [5, -11], [5, -12], [6, -13], [6, -14], [7, -15], [7, -16], [7, -16], [8, -17], [8, -18]],
    [0, [0, -1], [1, -2], [1, -3], [1, -4], [2, -5], [2, -6], [2, -7], [2, -8], [3, -9], [3, -10], [3, -10], [4, -11], [4, -12], [4, -13], [5, -14], [5, -15], [5, -16], [6, -17], [6, -18], [6, -19]],
    [0, [0, 1], [0, -2], [1, -3], [1, -4], [1, -5], [1, -6], [1, -7], [2, -8], [2, -9], [2, -10], [2, -11], [2, -12], [3, -13], [3, -14], [3, -15], [3, -16], [4, -17], [4, -18], [4, -19], [4, -20]],
    [0, [0, -1], [0, -2], [0, -3], [0, -4], [1, -5], [1, -6], [1, -7], [1, -8], [1, -9], [1, -10], [1, -11], [1, -12], [1, -13], [1, -14], [2, -15], [2, -16], [2, -17], [2, -18], [2, -19], [2, -20]],
    [0, [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7], [0, -8], [0, -9], [0, -10], [0, -11], [0, -12], [0, -13], [0, -14], [0, -15], [0, -16], [0, -17], [0, -18], [0, -19], [0, -20]],

    [0, [0, -1], [0, -2], [0, -3], [0, -4], [-1, -5], [-1, -6], [-1, -7], [-1, -8], [-1, -9], [-1, -10], [-1, -11], [-1, -12], [-1, -13], [-1, -14], [-2, -15], [-2, -16], [-2, -17], [-2, -18], [-2, -19], [-2, -20]],
    [0, [0, 1], [0, -2], [-1, -3], [-1, -4], [-1, -5], [-1, -6], [-1, -7], [-2, -8], [-2, -9], [-2, -10], [-2, -11], [-2, -12], [-3, -13], [-3, -14], [-3, -15], [-3, -16], [-4, -17], [-4, -18], [-4, -19], [-4, -20]],
    [0, [0, -1], [-1, -2], [-1, -3], [-1, -4], [-2, -5], [-2, -6], [-2, -7], [-2, -8], [-3, -9], [-3, -10], [-3, -10], [-4, -11], [-4, -12], [-4, -13], [-5, -14], [-5, -15], [-5, -16], [-6, -17], [-6, -18], [-6, -19]],
    [0, [0, -1], [-1, -2], [-1, -3], [-2, -4], [-2, -5], [-2, -5], [-3, -6], [-3, -7], [-4, -8], [-4, -9], [-4, -10], [-5, -11], [-5, -12], [-6, -13], [-6, -14], [-7, -15], [-7, -16], [-7, -16], [-8, -17], [-8, -18]],
    [0, [0, -1], [-1, -2], [-2, -3], [-2, -3], [-3, -4], [-3, -5], [-4, -6], [-4, -7], [-5, -8], [-5, -9], [-6, -10], [-6, -10], [-6, -11], [-7, -12], [-8, -13], [-8, -14], [-9, -15], [-9, -16], [-10, -16], [-10, -17]],
    [0, [-1, -1], [-1, -2], [-2, -2], [-2, -3], [-3, -4], [-4, -5], [-4, -6], [-5, -6], [-5, -7], [-6, -8], [-6, -9], [-7, -10], [-8, -11], [-8, -11], [-9, -12], [-9, -13], [-10, -14], [-11, -15], [-11, -15], [-12, -16]],
    [0, [-1, -1], [-1, -1], [-2, -2], [-3, -3], [-3, -4], [-4, -4], [-5, -5], [-5, -6], [-6, -7], [-7, -7], [-7, -8], [-8, -9], [-9, -10], [-9, -10], [-10, -11], [-11, -12], [-11, -13], [-12, -13], [-13, -14], [-13, -15]],
    [0, [-1, -1], [-1, -1], [-2, -2], [-3, -3], [-4, -3], [-4, -4], [-5, -5], [-6, -5], [-7, -6], [-7, -7], [-8, -7], [-9, -8], [-10, -9], [-10, -9], [-11, -10], [-12, -11], [-13, -11], [-13, -12], [-14, -13], [-15, -13]],
    [0, [-1, -1], [-2, -1], [-2, -2], [-3, -2], [-4, -3], [-5, -4], [-6, -4], [-6, -5], [-7, -5], [-8, -6], [-9, -6], [-10, -7], [-11, -8], [-11, -8], [-12, -9], [-13, -9], [-14, -10], [-15, -11], [-15, -11], [-16, -12]],
    [0, [-1, -1], [-2, -1], [-3, -2], [-3, -2], [-4, -3], [-5, -3], [-6, -4], [-7, -4], [-8, -5], [-9, -5], [-10, -6], [-10, -6], [-11, -7], [-12, -7], [-13, -8], [-14, -8], [-15, -9], [-16, -9], [-16, -10], [-17, -10]],
    [0, [-1, 0], [-2, -1], [-3, -1], [-4, -2], [-5, -2], [-5, -2], [-6, -3], [-7, -3], [-8, -4], [-9, -4], [-10, -4], [-11, -5], [-12, -5], [-13, -6], [-14, -6], [-15, -7], [-16, -7], [-16, -7], [-17, -8], [-18, -8]],
    [0, [-1, 0], [ -2, -1], [-3, -1], [-4, -1], [-5, -2], [-6, -2], [-7, -2], [-8, -2], [-9, -3], [-10, -3], [-10, -3], [-11, -4], [-12, -4], [-13, -4], [-14, -5], [-15, -5], [-16, -5], [-17, -6], [-18, -6], [-19, -6]],
    [0, [-1, 0], [-2, 0], [-3, -1], [-4, -1], [-5, -1], [-6, -1], [-7, -1], [-8, -2], [-9, -2], [-10, -2], [-11, -2], [-12, -2], [-13, -3], [-14, -3], [-15, -3], [-16, -3], [-17, -4], [-18, -4], [-19, -4], [-20, -4]],
    [0, [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, -1], [-6, -1], [-7, -1], [-8, 1], [-9, -1], [-10, -1], [-11, -1], [-12, -1], [-13, -1], [-14, -1], [-15, -2], [-16, -2], [-17, -2], [-18, -2], [-19, -2], [-20, -2]],
    [0, [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0], [-8, 0], [-9, 0], [-10, 0], [-11, 0], [-12, 0], [-13, 0], [-14, 0], [-15, 0], [-16, 0], [-17, 0], [-18, 0], [-19, 0], [-20, 0]],
];

function pushHTML(className, value) {
    if (value.__proto__ === Array.prototype) {
        document.querySelectorAll(className).forEach((item, i) => {
            item.innerHTML = value[i];
        });
    }
    else {
        document.querySelector(className).innerHTML = value;
    }
}

function getFieldInfo() {
    let meteoData = [];
    let meteoInputs = document.querySelectorAll(".form-control--meteo");

    meteoInputs.forEach(item => {
        meteoData.push(item.value);
    });

    return meteoData;
}

function replaceZero(num, length) { // замена минуса на 5ку с определенной длиной
    let isNegative = (Math.sign(num) === -1);

    let newNum = String(Math.abs(num)).padStart(length, 0);

    if (isNegative) {
        newNum = newNum.split("").map((item, index) => {
            if (index === 0) {
                return "5";
            };
            return item;
        }).join("");
    }

    return newNum;
}

function replaceZeroFifty(num, length) { // замена минуса на + 50 в первом столбце
    let isNegative = (Math.sign(num) === -1);
    let newNum;

    if (isNegative) {
        newNum = 50 + Math.abs(num);
    }
    else {
        newNum = String(Math.abs(num)).padStart(length, 0);
    }

    return newNum;
}

function getTemperatureModify(temp) { // поправка температуры воздуха по таблице 1
    let modifyTemp = 0;
    let modifyArr = 
    [
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 
        0.6, 0.7, 0.8, 0.9, 1, 
        1, 1, 1, 1, 1,
        1.1, 1.2, 1.3, 1.4, 1.5,
        1.6, 1.7, 1.8, 1.9, 2,
        2.2, 2.6, 2.8, 3.3, 3.5,
        3.6, 3.7, 3.8, 3.9, 4.0,
        4.1, 4.2, 4.3, 4.4, 4.5
    ];

    if (temp < 0) { // если входная температура меньше нуля
        modifyTemp = +temp;
    }
    else {
        modifyTemp = +temp + modifyArr[temp]
    }

    return modifyTemp;
}

function calcFullDate() { // Возвращает строку полного времени: Метео-1103-(25123)-0100-02059
    let dateObj = new Date();
    
    let date = String(dateObj.getDate()).padStart(2, 0);
    let hour = String(dateObj.getHours()).padStart(2, 0);
    let min = String(dateObj.getMinutes()).padStart(2, 0);

    return `${date}${hour}${min[0]}`;
}

function calcBarModify(bar) {
    let idealBar = 750;
    let barModify = bar - idealBar;

    return barModify;
}

function calcTempModify(temp) {
    let tempModern = getTemperatureModify(temp);
    return Math.round(tempModern - 15.9);
}

function insertDopFormule(h_answer, h_mp, h_op, h_zero, _tz, _tv) {
    document.querySelector("._h_data_zero").innerHTML = h_zero;
    document.querySelector("._h_data_mp").innerHTML = h_mp;
    document.querySelector("._h_data_op").innerHTML = h_op;
    document.querySelector("._h_data_answer").innerHTML = h_answer;

    document.querySelector("._tz").innerHTML = _tz;
    //document.querySelector("._tv").innerHTML = _tv;
}

function get_cmt_1(temp) { // заполнить первый столб (поправки температуры воздуха)
    //console.log(temp)
    let tableData = [];

    if (temp >= 0) {
        tableData = [...new Array(9)].fill(String(temp).padStart(2, 0))
    }
    else {
        temp = temp * -1;
        let tableDataValues = [
            [],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 1
            [-2, -2, -2, -2, -2, -2, -2, -2, -2], // 2
            [-3, -3, -3, -3, -3, -3, -2, -2, -2], // 3
            [-4, -4, -4, -4, -3, -3, -3, -3, -3], // 4
            [-5, -5, -5, -4, -4, -4, -4, -4, -4], // 5
            [-6, -6, -6, -5, -4, -4, -4, -4, -4], // 6
            [-7, -6, -6, -5, -5, -5, -5, -4, -4], // 7
            [-8, -7, -7, -6, -6, -6, -5, -5, -4], // 8
            [-8, -8, -7, -7, -7, -6, -6, -5, -5], // 9
            [-9, -9, -8, -8, -7, -7, -7, -6, -6], // 10

            [-10, -10, -9, -9, -8, -8, -8, -7, -7], // 11
            [-11, -11, -10, -10, -9, -9, -9, -8, -8], // 12
            [-12, -12, -11, -11, -10, -10, -10, -9, -9], // 13
            [-13, -13, -12, -12, -11, -11, -11, -10, -10], // 14
            [-14, -14, -13, -13, -12, -12, -12, -11, -11], // 15

            [-16, -15, -14, -13, -13, -12, -11, -11, -10], // 16
            [-17, -16, -15, -14, -14, -13, -12, -12, -11], // 17
            [-18, -17, -16, -15, -15, -14, -13, -13, -12], // 18
            [-19, -18, -17, -16, -16, -15, -14, -14, -13], // 19
            [-20, -19, -18, -17, -17, -16, -15, -15, -14], // 20

            [-21, -20, -19, -18, -17, -17, -16, -16, -15], // 21
            [-22, -21, -20, -19, -18, -16, -17, -16, -15], // 22
            [-23, -22, -21, -20, -19, -19, -18, -17, -16], // 23
            [-24, -23, -22, -20, -19, -19, -18, -17, -16], // 24
            [-25, -24, -23, -21, -20, -20, -19, -18, -17], // 25

            [-25, -25, -24, -22, -21, -21, -20, -19, -17], // 26
            [-26, -26, -25, -23, -22, -22, -21, -20, -18], // 27
            [-27, -27, -26, -24, -23, -22, -21, -20, -18], // 28
            [-28, -28, -27, -25, -24, -23, -22, -21, -19], // 29
            [-29, -29, -28, -26, -25, -24, -23, -22, -20], // 30

            [-30, -30, -29, -29, -28, -28, -28, -27, -27], // 31
        ];
        tableData = tableDataValues[temp];
    }

    //console.log(tableData);

    return tableData;
}

function get_cmt_2(wingAngle) { // заполнить второй столб (поправки угла ветра)
    let tableData = [1, 2, 3, 3, 4, 4, 4, 5, 5];
    return tableData.map(item => String(item + +wingAngle).padStart(2, 0));
}

function get_cmt_3(wingSpeed) { // заполнить третий столб (поправки скорости ветра)
    let tableData = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 2, 2, 2, 3, 3, 3, 3, 3], // 1
        [3, 4, 4, 4, 5, 5, 5, 5, 5], // 2

        [4, 5, 5, 5, 6, 6, 6, 6, 6], // 3 (уже табличные начинаются)
        [6, 7, 8, 8, 8, 9, 9, 9, 10], // 4
        [8, 10, 10, 11, 11, 11, 12, 12, 12], // 5
        [9, 11, 11, 12, 13, 13, 14, 14, 14], // 6
        [10, 12, 13, 13, 14, 14, 15, 15, 16], // 7
        [12, 14, 15, 16, 17, 17, 18, 18, 19], // 8
        [14, 17, 18, 19, 20, 20, 21, 21, 22], // 9
        [15, 18, 19, 20, 21, 21, 22, 23, 24], // 10
        [16, 20, 21, 22, 23, 24, 25, 25, 26], // 11
        [18, 22, 23, 24, 25, 26, 27, 28, 29], // 12
        [20, 23, 25, 26, 27, 28, 29, 30, 32], // 13
        [21, 25, 27, 28, 29, 30, 32, 32, 34], // 14
        [22, 27, 28, 30, 32, 32, 34, 36, 36], // 15
    ];

    return tableData[+wingSpeed];
}

function getListAw(angle, meteoColumn, isInline) { // Расчет Aw (дирекционного угла цели) (Aон, 2 столбец метео, массив Y бюл, выводить расчет строкой или нет)
    let awData = [];

    bt_Ybul.forEach((item, i) => {
        if (isInline) {
            awData.push(`
                Aw<sub>${i+1}</sub> = 
                ${AwToDelUgl(angle)} - 
                ${AwToDelUgl(meteoColumn[bt_Ybul[i]])} = 
                ${AwToDelUgl(angle - meteoColumn[bt_Ybul[i]])}
            `);
        }
        else {
            let aw = angle - meteoColumn[bt_Ybul[i]];
            awData.push((aw < 0 ? aw + 60 : aw)); // если aw по расчетам меньше 0, прибавляем 60
        }
    });

    return awData;
}

function getListWxz(aw, meteoData, index) {
    return bt_Ybul.map((item, i) => {
        // console.log(item, meteoData);
        return tableWingBallistic[aw[i]][meteoData[item]][index];
    });
}

function getListDsum(wz) {
    return bt_Ybul.map((item, i) => {
        //console.log(bt_Z[i], bt_Zw[i]);
        return Math.round((bt_Z[i]) + (0.1 * bt_Zw[i] * wz[i]));
    });
}

function getListDkm(wx, _H, _Tv, _Tz, _Vo) {
    let listData = [];

    bt_Ybul.forEach((item, i) => {
        let _Dw = Math.round(0.1 * bt_Xw[i] * wx[i]);
        let _Dn = Math.round(0.1 * bt_Xn[i] * _H);
        let _Dv = Math.round(0.1 * bt_Xt[i] * _Tv[i]);
        let _Dtz = Math.round(0.1 * bt_Xtz[i] * _Tz);
        let _Dvo = Math.round(bt_Xvo[i] * _Vo);

        let _Dsum = (_Dw + _Dn + _Dv + _Dtz + _Dvo);

        listData.push(`
            <span>△Dw<sub>${i+1}</sub> =  0.1 * ${bt_Xw[i]} * ${wx[i]} = ${_Dw}</span>
            <span>△Dн<sub>${i+1}</sub> =  0.1 * ${bt_Xn[i]} * ${_H} = ${_Dn}</span>
            <span>△Dв<sub>${i+1}</sub> =  0.1 * ${bt_Xt[i]} * ${_Tv[i]} = ${_Dv}</span>
            <span>△Dтз<sub>${i+1}</sub> = 0.1 * ${bt_Xtz[i]} * ${_Tz} = ${_Dtz}</span>
            <span>△Dvo<sub>${i+1}</sub> = ${bt_Xvo[i]} * ${_Vo} = ${_Dvo}</span>
            <br>
            <span>${i+1}км: <strong>${_Dsum}м</strong> | Д<sub>грп</sub> <strong>${((i+1)*1000) - _Dsum}м</strong></span>
        `);

        g_D_grp.push(((i+1)*1000) - _Dsum);
        g_D_sum.push(_Dsum);
    });

    return listData;
}

function numToDelUgl(num) {
    let prefix = (Math.sign(num) === -1) ? "-0-" : "0-";
    return prefix + String(Math.abs(num)).padStart(2, 0);
}

function AwToDelUgl(num) {
    let newStr = "";
    if (num < 0) {
        newStr = (60 + num) + "-00";
    }
    else {
        newStr = num + "-00";
    }
    return newStr;
}

function mainCalculate() {

    /*

    meteoData[0] -> Ho
    meteoData[1] -> aв
    meteoData[2] -> Vв
    meteoData[3] -> tв
    meteoData[4] -> Hмп

    meteoData[5] -> Hоп
    meteoData[6] -> aон
    meteoData[7] -> △Vo
    meteoData[8] -> tз

    */

    let charge = document.querySelector(".form-control--charge");
    if (charge !== null) {
        if (charge.value == 1) { // заряд первый
            //       1    2   3   4   5   6   7   8    9
            bt_Z =  [-1, -1, -2, -2, -3, -5, -6, -7, -9];
            bt_Zw = [-1, -3, -5, -6, -8, -9, -10, -11, -12];
            bt_Xw = [-3, -11, -28, -56, -89, -125, -164, -205, -247];
            bt_Xn = [1, 5, 9, 14, 20, 25, 30, 36, 42];
            bt_Xt = [-3, -11, -24, -43, -65, -89, -114, -139, -164];
            bt_Xtz = [-9, -17, -23, -29, -31, -34, -36, -40, -43];
            bt_Xvo = [-18, -33, -46, -57, -62, -67, -73, -80, -85];
            bt_Ybul = [0, 0, 0, 0, 1, 1, 2, 3, 4];

            console.log("Заряд 1");
        }
        else if (charge.value == 2) { // заряд 2
            bt_Z =  [-1, -2, -2, -3, -4, -6, -7, -9, -11];
            bt_Zw = [-1, -3, -5, -5, -7, -8, -9, -10, -11];
            bt_Xw = [-4, -20, -47, -81, -120, -157, -197, -238, -277];
            bt_Xn = [1, 4, 7, 12, 15, 20, 26, 31, 38];
            bt_Xt = [-4, -14, -32, -55, -78, -103, -126, -150, -172];
            bt_Xtz = [-7, -13, -17, -19, -21, -24, -27, -29, -32];
            bt_Xvo = [-18, -32, -42, -48, -53, -61, -67, -73, -81];
            bt_Ybul = [0, 0, 0, 0, 1, 2, 2, 3, 4];

            console.log("Заряд 2");
        }
    }

    let meteoData = getFieldInfo(); // получить данные из всех полей
    let meteoColumnData = [get_cmt_1(calcTempModify(meteoData[3])), get_cmt_2(meteoData[1]), get_cmt_3(meteoData[2])]; // данные из столбцов метео по высотам

    pushHTML(".cm_date", calcFullDate() );
    pushHTML(".cm_h_mp", replaceZero(meteoData[4], 4) );
    pushHTML(".cm_bar", replaceZero(calcBarModify(meteoData[0]), 3) );
    pushHTML(".cm_temp", replaceZeroFifty(calcTempModify(meteoData[3]), 2) );

    pushHTML(".cmt_1", meteoColumnData[0].map(item => replaceZeroFifty(item, 2) )); // заполнение первого столбца по высотам
    pushHTML(".cmt_2", meteoColumnData[1].map(item => replaceZero(item, 2) ));
    pushHTML(".cmt_3", meteoColumnData[2].map(item => replaceZero(item, 2) ));

    let meteoAwData = getListAw(meteoData[6], meteoColumnData[1], false);
    pushHTML(".cmt_aw", getListAw(meteoData[6], meteoColumnData[1], true));

    let meteoWxData = getListWxz(meteoAwData, meteoColumnData[2], 0);
    let meteoWzData = getListWxz(meteoAwData, meteoColumnData[2], 1);

    pushHTML(".cmt_wx", meteoWxData.map((item, i) => `Wx<sub>${i+1}</sub> = ${item}`));
    pushHTML(".cmt_wz", meteoWzData.map((item, i) => `Wz<sub>${i+1}</sub> = ${item}`));

    let meteoDsumData = getListDsum(meteoWzData);
    g_Ugl_sum = meteoDsumData;
    pushHTML(".cmt_dsum", meteoDsumData.map((item, i) => `△dсум<sub>${i+1}</sub> = (${bt_Z[i]}) + (0.1 * ${bt_Zw[i]} * ${meteoWzData[i]}) = <b>${numToDelUgl(item)}</b>`));

    let meteo_H = calcBarModify(meteoData[0]) + ((meteoData[4] - meteoData[5]) / 10);
    let meteo_Tv = bt_Ybul.map(item => meteoColumnData[0][item]);
    let meteo_Tz = meteoData[8] - 15;

    insertDopFormule(meteo_H, meteoData[4], meteoData[5], calcBarModify(meteoData[0]), meteo_Tz, meteo_Tv);

    let meteoDkmData = getListDkm(meteoWxData, meteo_H, meteo_Tv, meteo_Tz, meteoData[7]);
    pushHTML(".cmt_Dkm", meteoDkmData);
    
    console.log("Дата:", calcFullDate());
    console.log("Поправка атмо: ", calcBarModify(meteoData[0]));
    console.log("Поправка температуры:", getTemperatureModify(meteoData[3]));
    console.log("Поправка температуры чистая:", calcTempModify(meteoData[3]));

    
    console.log("wx/wz 1/13", tableWingBallistic[1][13]);
    
    console.log("_H: ", meteo_H);
    console.log("_Tz: ", meteo_Tz);
    console.log("_Tv:", meteo_Tv);

    // console.log("g_D_sum", g_D_sum);
    // console.log("g_D_grp", g_D_grp);

}

let input_grp = document.querySelector(".form-control-grp");
let text_grp = document.querySelector(".input-group-text-grp");
let text_grp_uglom = document.querySelector(".grp_uglom");

if (input_grp !== null && text_grp !== null && text_grp_uglom !== null) {
    let grp_value = 0;
    input_grp.addEventListener("input", () => {
        grp_value = calculateGrpDistance(input_grp.value);
        grp_uglom_value = calculateGrpUglom(input_grp.value);
        text_grp.innerHTML = `<strong>${grp_value}м</strong>&nbsp;| Д<sub>исч</sub> = <strong>${+input_grp.value + grp_value}м</strong>`;
        text_grp_uglom.innerHTML = numToDelUgl(grp_uglom_value);
    });
}

function calculateGrpDistance(val) {
    let [firstIndex, secondIndex] = calculateGrpIndexes(val);
    let coef = Math.round((g_D_grp[secondIndex] - g_D_grp[firstIndex]) / (g_D_sum[secondIndex] - g_D_sum[firstIndex]));
    let addedNum = Math.round((val - g_D_grp[firstIndex]) / coef);
    return (g_D_sum[firstIndex] + addedNum);
}

function calculateGrpUglom(val) {
    let [firstIndex, secondIndex] = calculateGrpIndexes(val);
    let coef = Math.round((g_D_grp[secondIndex] - g_D_grp[firstIndex]) / (g_Ugl_sum[secondIndex] - g_Ugl_sum[firstIndex]));
    let addedNum = Math.round((val - g_D_grp[firstIndex]) / coef);
    return (g_Ugl_sum[firstIndex] + addedNum);
}

function calculateGrpIndexes(val) {
    let firstIndex, secondIndex;
    for (let i = 0; i < g_D_grp.length; i++) {
        if ((g_D_grp[i] - val) > 0) {
            firstIndex = i - 1;
            secondIndex = i;
            break;
        }
    }
    return [firstIndex, secondIndex];
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    let isValid = true;

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                isValid = true;
                event.preventDefault()
                event.stopPropagation()

                if (!form.checkValidity()) {
                    isValid = false;
                }

                form.classList.add('was-validated')
                
                if (isValid) {
                    mainCalculate();
                }

            }, false)
        });

})();
// ДАННЫЕ ИЗ ТАБЛИЦЫ СТРЕЛЬБЫ | Заряд 2 (bt - base table)
             //0   1   2   3   4   5   6   7   8   9

const bt_Z =  [0, -1, -2, -2, -3, -4, -6, -7, -9, -11];
const bt_Zw = [0, -1, -3, -5, -5, -7, -8, -9, -10, -11];
const bt_Xw = [0, -4, -20, -47, -81, -120, -157, -197, -238, -277];
const bt_Xn = [0, 1, 4, 7, 12, 15, 20, 26, 31, 38];
const bt_Xt = [-4, -14, -32, -55, -78, -103, -126, -150, -172];
const bt_Xtz = [-7, -13, -17, -19, -21, -24, -27, -29, -32];
const bt_Xvo = [-18, -32, -42, -48, -53, -61, -67, -73, -81];

const bt_Ybul = [0, 0, 0, 0, 0, 1, 2, 2, 3, 4];

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
];

tableWingBallistic[2][1]

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

function getTemperatureModify(temp) { // поправка температуры по таблице 1
    let modifyArr = 
    [
        0, 0.1, 0.2, 0.3, 0.4, 0.5, 
        0.6, 0.7, 0.8, 0.9, 1, 
        1, 1, 1, 1, 1,
        1.1, 1.2, 1.3, 1.4, 1.5,
        1.6, 1.7, 1.8, 1.9, 2,
        2.2, 2.6, 2.8, 3.3, 3.5,
        3.6, 3.7, 3.8, 3.9, 4.0,
        4.1, 4.2, 4.3, 4.4, 4.5
    ];

    return +temp + modifyArr[temp];
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

function get_cmt_1(temp) { // заполнить первый столб (поправки температуры)
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
        ];
        tableData = tableDataValues[temp];
    }

    return tableData;
}

function get_cmt_2(wingAngle) { // заполнить второй столб (поправки угла ветра)
    let tableData = [1, 2, 3, 3, 4, 4, 4, 5, 5];
    return tableData.map(item => String(item + +wingAngle).padStart(2, 0));
}

function get_cmt_3(wingSpeed) { // заполнить третий столб (поправки скорости ветра)
    let tableData = [
        [],
        [],
        [],
        [4, 5, 5, 5, 6, 6, 6, 6, 6], // 3
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

function calc_Aw(angle, meteoColumn, height) { // Расчет Aw (дирекционного угла цели)
    return angle - meteoColumn[bt_Ybul[height]];
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
    meteoData[7] -> tз
    meteoData[8] -> △Vo

    */

    let meteoData = getFieldInfo(); // получить данные из всех полей
    let meteoColumnData = [get_cmt_1(calcTempModify(meteoData[3])), get_cmt_2(meteoData[1]), get_cmt_3(meteoData[2])]; // данные из столбцов метео по высотам

    pushHTML(".cm_date", calcFullDate() );
    pushHTML(".cm_h_mp", replaceZero(meteoData[4], 4) );
    pushHTML(".cm_bar", replaceZero(calcBarModify(meteoData[0]), 3) );
    pushHTML(".cm_temp", replaceZero(calcTempModify(meteoData[3]), 2) );

    pushHTML(".cmt_1", meteoColumnData[0].map(item => replaceZero(item, 2) )); // заполнение первого столбца по высотам
    pushHTML(".cmt_2", meteoColumnData[1].map(item => replaceZero(item, 2) ));
    pushHTML(".cmt_3", meteoColumnData[2].map(item => replaceZero(item, 2) ));

    console.log("Дата:", calcFullDate());
    console.log("Поправка атмо: ", calcBarModify(meteoData[0]));
    console.log("Поправка температуры:", getTemperatureModify(meteoData[3]));
    console.log("Поправка температуры чистая:", calcTempModify(meteoData[3]));

    console.log("Aw8", calc_Aw(meteoData[6], meteoColumnData[1], 8));
    
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
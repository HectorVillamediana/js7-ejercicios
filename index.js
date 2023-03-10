import { countries } from './arrays/countries.js';

//========================EJERCICIOS====================================

//============================1====================================

/*const fullName = function(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName('Hector', 'Villamediana'));*/
//============================2====================================

const fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Hector', 'Villamediana'));

//============================3====================================


const addNumbers = function (num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 7));

//============================4====================================

const areaOfRectangle = function (length, width) {
    return length * width;
}
console.log(areaOfRectangle(20, 15));

//============================5====================================

const perimeterOfRectangle = function (length, width) {
    return 2 * (length + width);
}
console.log(perimeterOfRectangle(20, 15));

//============================6====================================

const volumeOfRectPrism = function (length, width, height) {
    return length * width * height
}
console.log(volumeOfRectPrism(5, 8, 7));

//============================7====================================

const areaOfCircle = function (radio) {
    return Math.PI * radio ** 2
}
console.log(areaOfCircle(5));

//============================8====================================


const circumOfCircle = function (radio) {
    return 2 * Math.PI * radio
}
console.log(circumOfCircle(5));

//============================9====================================

const densityOfSustance = function (mass, volume) {
    return mass / volume;
}
console.log(densityOfSustance(5, 2));

//============================10====================================

const speed = function (distance, time) {
    return distance / time;
}
console.log(speed(6, 3));

//============================11====================================

const peso = function (mass) {
    return mass * 9.81
}
console.log(peso(100));

//============================12====================================

const convertCelsiusToFahrenheit = function (gradesC) {
    return gradesC * (9 / 5) + 32
}
console.log(convertCelsiusToFahrenheit(35));

//============================13====================================

const IMC = function (weight, height, edad) {
    let suIndice = "";
    if (edad >= 20) {

        if (weight / height ** 2 < 18.5) {
            suIndice = 'Peso Bajo';
        } else if (weight / height ** 2 > 18.5 && weight / height ** 2 < 24.9) {
            suIndice = 'Peso Normal';
        } else if (weight / height ** 2 > 25 && weight / height ** 2 < 29.9) {
            suIndice = 'Sobrepeso';
        } else
            suIndice = 'Obeso';
    } else {
        return `No se puede calcular su IMC a esa edad`;
    }
    return suIndice
}
console.log(IMC(60, 1.80, 19));


//============================14====================================

const checkSeason = function (mes) {
    let estacion = '';
    switch (mes) {
        case 'Diciembre':
        case 'Enero':
        case 'Febrero':
        case 'Marzo':
        case 'diciembre':
        case 'enero':
        case 'febrero':
        case 'marzo':
            estacion = 'Invierno'
            break;
        case 'Abril':
        case 'Mayo':
        case 'Junio':
        case 'abril':
        case 'mayo':
        case 'junio':
            estacion = 'Primavera'
            break;
        case 'Julio':
        case 'Agosto':
        case 'Septiembre':
        case 'julio':
        case 'agosto':
        case 'septiembre':
            estacion = 'Verano'
            break;
        case 'Octubre':
        case 'Noviembre':
        case 'octubre':
        case 'noviembre':
            estacion = 'Otoño'
            break;
    }
    return estacion;

}
console.log('Estamos en: ' + checkSeason('Diciembre'));

//============================15====================================

const findMax = function (num1, num2, num3) {
    let mayor = 0
    if (num1 > num2 && num1 > num2) {
        mayor = num1
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2
    } else {
        mayor = num3
    }
    return mayor;
}
console.log(findMax(10, 20, 19));

//========================NIVEL 2====================================

//============================1====================================

const solveLinEquation = function (a, b, c, x, y) {
    return (a * x) + (b * y) + c
}
console.log(solveLinEquation(5, 2, -26, 2, 8));

//============================2====================================

const solveQuadEquation = function (a, b, c, x, y) {
    return (a * x) + (b * y) + c
}
console.log(solveLinEquation(5, 2, -26, 2, 8));

//============================3====================================

const printArray = function (array) {
    for (let i = 0; i <= array.length - 1; i++) {
        console.log(array[i]);
    }
}
console.log(printArray([1, 2, 3, 4, 5]));

//============================4====================================


const showDateTime = function () {
    let horaActual = new Date()
    let dia = 0;
    let mes = 0;
    let hora = 0;
    let minuto = 0;
    if (horaActual.getDay() < 10) {
        dia = '0' + horaActual.getDay()
    }
    if (horaActual.getMonth() < 10) {
        mes = '0' + horaActual.getMonth()
    }
    if (horaActual.getMinutes() < 10) {
        minuto = '0' + horaActual.getMinutes()
    }
    if (horaActual.getSeconds() < 10) {
        hora = '0' + horaActual.getSeconds()
    }
    return `${dia} / ${mes} / ${horaActual.getFullYear()} ${hora}:${minuto}`
}
console.log(showDateTime());

//============================5====================================

const swapValues = function (x, y) {
    let Newx = 0 + y
    let Newy = 0 + x
    return `x es: ${Newx}, y y es: ${Newy}`;
}
console.log(swapValues(5, 4));

//============================6====================================

const reverseArray = function (array) {
    let InvArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        InvArray.push(array[i]);
    }
    return InvArray
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//============================7====================================

const capitalizeArray = function (array) {
    let capitalizedarray = []
    for (let i = 0; i <= array.length - 1; i++) {
        capitalizedarray.push(array[i].toString().toUpperCase());

    }
    return capitalizedarray;
}
console.log(capitalizeArray(['a', 'b', 'c']));

//============================8====================================
let arrayAddElm = ['Manzana', 'Pera', 'Durazno']
const addItem = function (element) {
    let newArr = arrayAddElm.concat(element)
    return newArr;
}
console.log(addItem('Fresa'));

//============================9====================================

let arrayDelElm = ['Manzana', 'Pera', 'Durazno', 'Fresa']
const removeItem = function (element) {
    let index = arrayDelElm.indexOf[element]
    arrayDelElm.splice(element, 1)

    return arrayDelElm;
}
console.log(removeItem('Pera'));

//============================10====================================
let sumaNum = 0
const sumOfNumbers = function (num) {
    for (let i = 0; i <= num; i++) {
        sumaNum += i;
    }
    return sumaNum;
}
console.log(sumOfNumbers(5));

//============================11====================================

const sumOfOdds = function (num) {
    let sumaOddNum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            sumaOddNum += i;
        }
    }
    return sumaOddNum;
}
console.log(sumOfOdds(5));

//============================12====================================


const sumOfEvens = function (num) {
    let sumEvenNum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            sumEvenNum += i;
        }
    }
    return sumEvenNum;
}
console.log(sumOfEvens(5));


//============================13====================================

const evensAndOdds = function (num) {

    let oddNum = 0;
    let evenNum = 0;

    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            evenNum += 1;
        } else {
            oddNum += 1;
        }
    }
    return `Hay ${evenNum} numeros pares y ${oddNum} impares`;
}
console.log(evensAndOdds(5));
//============================14====================================

const ilimP = function (a, b, ...args) {
    let total = 0
    for (const arg of args) {
        total += arg;
    }
    return total + a + b;
}
console.log(ilimP(1, 2, 3, 4, 5, 6));

//============================15====================================

const randomUserIp = function () {
    let ip = 0;
    for (let i = 0; i <= 3; i++) {
        ip += Math.round(Math.random() * 255)
        if (i < 3) {
            ip += '.'
        }
    }
    return ip
}

console.log(randomUserIp());

//============================16====================================

const randomMacAddress = function () {
    const characters = 'ABCDEabcde0123456789';
    let macAdress = " ";
    for (let i = 0; i <= 5; i++) {
        if (i == 0) {
            macAdress = macAdress;
        } else {
            for (let j = 0; j <= 1; j++) {
                macAdress = macAdress.concat(characters.charAt(Math.random() * characters.length))
            }
            macAdress += ':'
        }
    }
    return macAdress
}

console.log(randomMacAddress());

//============================17====================================

const randomHexaNumberGenerator = function () {
    const characters = 'ABCDEabcde0123456789';
    let hexadecimal = "#";
    for (let i = 0; i <= 6; i++) {
        hexadecimal = hexadecimal.concat(characters.charAt(Math.random() * characters.length))
    }
    return hexadecimal;
}

console.log(randomHexaNumberGenerator());

//============================18====================================

const urserIdGenerator = function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = " ";
    for (let i = 0; i <= 6; i++) {
        id = id.concat(characters.charAt(Math.random() * characters.length))
    }
    return id;
}

console.log(urserIdGenerator());

//========================NIVEL 3====================================

//============================1====================================
/*let idNumber = parseInt(prompt("Ingrese la cantidad de ids: "))
let idChar = parseInt(prompt("Ingrese el numero de5 caracteres: "))

const urserIdGeneratedByUser = function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = "";
    for (let i = 0; i <= idNumber - 1; i++) {
        id += "\n"
        for (let j = 0; j <= idChar - 1; j++) {
            id = id.concat(characters.charAt(Math.random() * characters.length))
        }
    }
    return id;
}
console.log(urserIdGeneratedByUser());*/


//============================2====================================

const rgbColorGenerator = function () {
    let rgb = "rgb"
    let arrayrgb = [];

    for (let i = 0; i < 3; i++) {
        arrayrgb.push(Math.floor(Math.random() * 255));
    }
    return rgb + "(" + arrayrgb[0] + "," + arrayrgb[1] + "," + arrayrgb[2] + ")";
}
console.log(rgbColorGenerator());


//============================3====================================

const arrayOfHexaColors = function (totalHexas) {
    const characters = 'ABCDEabcde0123456789';
    let hexadecimal = "#";
    let hexas = [];
    for (let i = 0; i <= totalHexas - 1; i++) {
        if (i == 0) {
            for (let i = 0; i <= 5; i++) {
                hexadecimal = hexadecimal.concat(characters.charAt(Math.random() * characters.length))
            }
            hexas.push(hexadecimal);
            hexadecimal = '#';
        } else {
            for (let j = 0; j <= 5; j++) {
                hexadecimal = hexadecimal.concat(characters.charAt(Math.random() * characters.length))
            }

            if (i !== 0) {
                hexas.push(hexadecimal);
                hexadecimal = '#'
            }
        }
    }
    return hexas;
}
console.log(arrayOfHexaColors(3));

//============================4====================================

const arrayOfRgbColors = function (totalColors) {
    let rgb = "rgb"
    let arrayrgb = [];
    let arrayRgbColors = [];
    let colors = ""

    for (let i = 0; i <= totalColors - 1; i++) {
        if (i == 0) {
            for (let j = 0; j < 3; j++) {
                arrayrgb.push(Math.floor(Math.random() * 255));
            }
            colors = rgb + "(" + arrayrgb[0] + "," + arrayrgb[1] + "," + arrayrgb[2] + ")";
            arrayRgbColors.push(colors);
        } else {
            arrayRgbColors.push(colors);
        }
        for (let j = 0; j < 3; j++) {
            arrayrgb.push(Math.floor(Math.random() * 255));
        }
    }
    return arrayRgbColors;
}
console.log(arrayOfRgbColors(3));

//============================5====================================

const convertHexaToRgb = function (hexaColor) {

    let color1 = '';
    let color2 = '';
    let color3 = '';
    let arrayrgb_ = [];
    let colors_ = "";
    let rgb_ = 'rgb';

    color1 = parseInt((hexaColor.charAt(2) + hexaColor.charAt(3)), 16);
    arrayrgb_.push(color1);
    color2 = parseInt((hexaColor.charAt(4) + hexaColor.charAt(5)), 16);
    arrayrgb_.push(color2);
    color3 = parseInt((hexaColor.charAt(6) + hexaColor.charAt(7)), 16);
    arrayrgb_.push(color3);

    colors_ = rgb_ + "(" + arrayrgb_[0] + "," + arrayrgb_[1] + "," + arrayrgb_[2] + ")";

    return colors_;
}

console.log(convertHexaToRgb('#47dd0b'));

//============================6====================================

const convertRgbToHexa = function (r, g, b) {

    let color1_ = '';
    let color2_ = '';
    let color3_ = '';
    let _arrayrgb_ = [];
    let _colors_ = "";
    let _rgb_ = 'rgb';

    color1_ = r.toString(16)
    _arrayrgb_.push(color1_);
    color2_ = g.toString(16)
    _arrayrgb_.push(color2_);
    color3_ = b.toString(16)
    _arrayrgb_.push(color3_);

    let hexas = '#' + color1_ + color2_ + color3_

    return hexas;
}

console.log(convertRgbToHexa(125, 208, 11));

//============================7====================================

const generateColors = function (typeOfColor, numOfColors) {

    const characters = 'ABCDEabcde0123456789';
    let hexadecimal = "#";
    let hexas = [];
    let rgb = "rgb"
    let arrayrgb = [];
    let arrayRgbColors = [];
    let colors = ''


    if (typeOfColor == 'rgb' || typeOfColor == 'Rgb') {

        for (let i = 0; i <= numOfColors - 1; i++) {
            if (i == 0) {
                for (let j = 0; j < 3; j++) {
                    arrayrgb.push(Math.floor(Math.random() * 255));
                }
                colors = rgb + "(" + arrayrgb[0] + "," + arrayrgb[1] + "," + arrayrgb[2] + ")";
                arrayRgbColors.push(colors);
            } else {
                arrayRgbColors.push(colors);
            }
            for (let j = 0; j < 3; j++) {
                arrayrgb.push(Math.floor(Math.random() * 255));
            }
        }
        return arrayRgbColors;

    } else if (typeOfColor == 'hexa' || typeOfColor == 'Hexa') {

        for (let i = 0; i <= numOfColors - 1; i++) {
            if (i == 0) {
                for (let i = 0; i <= 5; i++) {
                    hexadecimal = hexadecimal.concat(characters.charAt(Math.random() * characters.length))
                }
                hexas.push(hexadecimal);
                hexadecimal = '#';
            } else {
                for (let j = 0; j <= 5; j++) {
                    hexadecimal = hexadecimal.concat(characters.charAt(Math.random() * characters.length))
                }

                if (i !== 0) {
                    hexas.push(hexadecimal);
                    hexadecimal = '#'
                }
            }
        }
        return hexas
    }
}
console.log(generateColors('rgb', 4));
//============================8====================================

const shuffleArray = function (array) {
    let newArray = [];

    newArray = array.sort(function () { return Math.random() - 0.5 });
    return newArray
}
console.log(shuffleArray([2, 2, 5, 6, 7, 8]));


//============================9====================================

const factorial = function (int) {
    let fact = 1;
    for (let i = 0; i <= int; i++) {

        if (i == 0) {
            i = i;
        } else {
            fact *= i
        }
    }
    return fact
}
console.log(factorial(5));


//============================10====================================

const isEmpy = function (param) {
    if (param) {
        return `Existe un argumento`
    } else {
        return `No existe un argumento`
    }
}
console.log(isEmpy(""));


//============================11====================================

const sum = function (a, b, ...args) {
    let total = 0
    for (const arg of args) {
        total += arg;
    }
    return total + a + b;
}
console.log(sum(1, 2, 3, 4, 5, 6));

//============================12====================================

const sumOfArrayItems = function (array) {

    let total = 0

    for (let j = 0; j <= array.length - 1; j++) {
        total += array[j]
    }
    if (typeof total == "number") {
        return `el total es: ${total}`
    } else {
        return `introdujo un parametro invalido`
    }
}
console.log(sumOfArrayItems([1, 2, 3, 'hola', 5, 6]));

//============================13====================================

const average = function (array) {

    let promedio = 0

    for (let j = 0; j <= array.length - 1; j++) {
        promedio += array[j]
    }
    promedio /= array.length
    if (typeof promedio == "number") {

        return `el promedio es ${promedio}`
    } else {
        return `introdujo un parametro invalido`
    }
}

console.log(average([1, 2, 3, 4, 5, 6]));

//============================14====================================

const modifyArray = function (array) {

    let _elemt = array[4].toString().toUpperCase()

    if (!array[4]) {
        return `El quinto elemento no existe`
    } else {

        return array.fill(_elemt, 4, 5)
    }
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));

//============================15====================================

const isPrime = function (num) {
    let arrayPrimos = []
    if (num == 0 || num == 1 || num == 4) {
        return false;
    }
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1201));

//============================16====================================

const repeatElements = function (array) {

    let repeat = false;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] == array[j] && i != j) {
                repeat = true;
            }
        }
    }
    if (repeat) return 'Hay elementos repetidos';
    else return 'No hay elementos repetidos';
}

console.log(repeatElements([5, 4, 3, 2, 1, 0]));

//============================17====================================

const repeatTypes = function (array) {

    let repeatType = false;
    let sameType = 0;

    for (var i = 0; i < array.length; i++) {

        for (var j = 0; j < array.length; j++) {
            if (typeof array[i] == typeof array[j] && i != j) {
                repeatType = true;
                sameType += 1
            }
        }

    }
    if (sameType == array.length * 2) return 'Los elementos son del mismo tipo';
    else return 'Los elementos no son del mismo tipo';
}

console.log(repeatTypes([5, true, 6]));
//============================18====================================

const isValidVariable = function (yourVar) {

    let valid = false;
    let begin = false;
    let validIndex = 0;

    for (let i = 0; i < yourVar.length; i++) {
        if (yourVar[i].match(/\w/g) || yourVar[i].match(/[\_\$]/g)) {
            validIndex += 1;
        }
        validIndex == yourVar.length ? valid = true :
            valid = false;
    }
    if (yourVar[0].match(/[A-Za-z]/g) || yourVar[0].match(/[_$]/g)) {
        begin = true;
    } else {
        begin = false;
    }

    if (valid && begin) return 'La variable es valida';
    else return 'La variable es invalida';
}
console.log(isValidVariable('_*hola'));

//============================19====================================

const randomNumbers0_9 = function () {

    let repeat = false;
    let randomArr = [];
    let number = 0;
    for (var i = 0; i < 155; i++) {
        number = Math.floor(Math.random() * 9);
        randomArr.push(number);
        for (var j = 0; j < randomArr.length; j++) {
            if (randomArr[i] == randomArr[j] && i != j) {
                repeat = true;
            } else repeat = false;
            if (repeat) {
                number = Math.floor(Math.random() * 9);
                randomArr[i-1] = Math.floor(Math.random() * 9);
            }
        }

        if (randomArr.length == 9) i = 155;
    }
    return randomArr
}
console.log(randomNumbers0_9());

//============================20===================================

const funcReverse = function () {
    return countries.reverse()
}
console.log(funcReverse());
//Método forEach --------
const arrayForEach = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
const arrayVazio = [];
//nossa callback
function callbackForEach(element) {
  return arrayVazio.push(element * 2);
}

function forEach(array, callback) {
  //sua lógica aqui
}

// console.log(forEach(arrayForEach, callbackForEach));
// console.log(arrayVazio);

//Método Find --------

const arrayFind = [12, true, "alfafa", 4, 5]; // array para iteração do método

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element) {
  if (element > 2 && element < 12) {
    return true;
  }
}

//nossa segunda callback testa se existe algum elemento maior que 15
function callbackFindTwo(element) {
  if (element > 15) {
    return true;
  }
}

function find(array, callback) {
  //sua lógica aqui
}
// console.log(find(arrayFind, callbackFind));
// console.log(find(arrayFind, callbackFindTwo));

//Método IndexOf --------

const arrayFindIndex = [595, 206, "apollo", false, null, undefined, 8]; // array para iteração do método

//primeira callback que procura algum elemento que seja uma string
function callbackFindIndex(element) {
  return typeof element === "string" ? true : false;
}

//segunda callback que testa se existe algum elemento igual a 3 no array
function callbackFindIndexTwo(element) {
  return element == 3 ? true : false;
}

function FindIndex(array, callback) {
  //sua lógica aqui
}
// console.log(FindIndex(arrayFindIndex, callbackFindIndex));
// console.log(FindIndex(arrayFindIndex, callbackFindIndexTwo));

//Método Includes --------

const arrayIncludes = [53, 2, "duck", NaN, 456, 7]; // array para iteração do método

function includes(array, searchElement) {
  //sua lógica aqui
}

// console.log(includes(arrayIncludes, "duck"));
// console.log(includes(arrayIncludes, 500));

//Método some --------
const arrySome = [12, 82, 563, 414, null]; // array para iteração do método
const callbackSome = (element) => {
  return element > 82 ? true : false;
};

const callbackSome2 = (element) => {
  if (element) {
    return false;
  }
};

function some(array, callback) {
  //sua lógica aqui
}

// console.log(some(arrySome, callbackSome));
// console.log(some(arrySome, callbackSome2));

//Método Join --------

const arrayJoin = ["Fogo", "no", "Parquinho"]; // array para iteração do método

function join(array, value) {
  //sua lógica aqui
}

// console.log(join(arrayJoin, " "));
// console.log(join(arrayJoin, ""));
// console.log(join(arrayJoin, "-"));

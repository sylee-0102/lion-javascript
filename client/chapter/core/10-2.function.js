/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


//! 함수 선언 → 일반 함수 (표현)식


/*let calculateTotal = function(priceA, priceB, priceC, priceD) {
  return priceA + priceB + priceC + priceD;
  //@허접해, 이유는 ? 사용자가 값을 4개만 넣을지 어떻게 알아 ?
}

const result = calculateTotal(1000,500,200,6500);
console.log(result);*/

//우리가 넣은 아규먼트들을 한번에 받아서 처리하는 방법 (함수 내장 기능 이용)
let calculateTotal = function () {
  console.log(arguments);
  
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은 ? : arguments 
  //Arguments(4) [1000, 500, 200, 6500, callee: ƒ, Symbol(Symbol.iterator): ƒ] 이렇게 아규먼츠를 만들어 배열로 기능을 해준다. 함수 선언문 표현문 둘다 사용 가능. 심볼 이터레이터까지 있어서 순회가 가능해지니까 for of문까지 만들 수 있어. 그러나 얘의 prototype은 객체야 .. 신기하지?
  //!이걸 반복문을 돌아서 총합을 한번에 구해보자
  //arguments 객체를 사용해서 함수의 매개변수 없이 아이템의 총합을 구해보자
  let total = 0;
  /*
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    //begin condition step
    //모든 값을 누적할 누적변수에 값을 더 해 주기
    total += arguments[i];
    
  }
  return total // 총합 출력*/
  // //@ 2.for of로 만들어보기
  // for (let key of arguments) {
  //   total += key;
  //   }
  //   return total
  
  //@ 3.배열을 능력을 사용해서 배열을 돌아보자. 배열의 forEach능력을 살짝 빌려쓰기 call me lover
  /*Array.prototype.forEach.call(arguments,function(item){
    console.log(item);
    total += item;

  })
  return total;*/
  //@ 4.빌려쓰지 말고 한번 배열로 만들어버려서 직접 써볼까 ? object. entries.keys ... 이걸로 말고 다른거
  //@4-1. slice 이용하자 도려내는 기능.
  /*let realArray = Array.prototype.slice.call(arguments);
  console.log(realArray);
  realArray.forEach(function(){
    total += item;
  })
  return total*/
  //!Object.prototype.toString() -> 인스턴스 메소드 instance method 오브젝트만 쓸 수 있는 메소드 = 인스턴스 메소드
  //! Object.entries -> static method 유틸함수처럼 여기저기 가져다 쓸 수 있는게 static method 객체 생성없이 누구나 가져다 사용할 수 있는 유틸 메서드

  //@4-2. Array.from 이걸 쓰게 되면 프르토타입에 접근해서 call을 쓸 필요가 없이 그냥 배열로 반환해줌.
  /*let realArray = Array.from(arguments);
  console.log(realArray);
  realArray.forEach(function(item) {
    total += item;
  })
  return total*/
  //@4-3. spread syntax Object.prototype.toString() , Object.entries()
  /*//만약 추가로 더 배열을 더하고 싶으면 ?
  let arr =[10,50,100];
  let realArray = [... arguments, ... arr]; //이렇게 배열을 더해준다.
  console.log(realArray);
  realArray.forEach((item) => {
    total += item; //forEach - 각각의 능력을 돈다.
  })*/
  /*let arr = [10,50,100];
  let realArray = [... arguments];
  console.log(realArray);
  realArray.forEach (function(item,index){
      total += item;
        console.log(item)
  })*/
  //@4-4 Array.reduce 첫번째 값은 누적값로서 애초에 누적 애큐멀레이터 그 누적된 값을 반을 수 있는것 , 각자 순휘를 도는 그 아이템들이 들어옴 . 그리고 init value라고 해서 최촛값을 설정해줘야한다. init value의 역할은 초기값을로서 첫번째 값에 넣어줄 것을 만들어 줌.
  // let arr = [10,50,100];
  /*let realArray = [... arguments];
  return realArray.reduce ((acc, item) => {
    return acc + item //리턴이 또 필요한 이유가 acc 어큐멀레이터때문이다. 누적해야만 해서    
  },0);*/
  /*//!에로우로 만들어볼까
  return realArray.reduce((acc,item) => acc + item , 0);
  //!에로우이면서 변수에 담아볼까
  total = realArray.reduce((acc,item) => acc + item , 0);
  // return total
*/

};
const result = calculateTotal(1000,500,200,6500,100);
console.log(result);


//! 익명(이름이 없는) 함수 (표현)식
//console.dir(anonymousFunctionExpression)를 넣으면 이름이 있다.
// anonymousFunctionExpression 함수인데 왜 내부에 프로퍼티가 있고 값을 찾을 수 있는지 이상하지 ? 모든 것은 객체로 만들어지기 때문에 함수이나 근본은 객체이다 이것이 자바스크립트의 비밀이지 .. 미친넘아 왜 이렇게 만들었냐
let anonymousFunctionExpression = function() {

};


//! 유명(이름을 가진) 함수 (표현)식
//함수라는 객체에 hello라는 이름을 부여해볼까 ~
let namedFunctionExpression = function hello() {

};


//! 콜백 함수 (표현)식
let callbackFunctionExpression = function (callback) {
  // const callback = function() {console.log('콜백 함수 실행!')};
  callback();
};

callbackFunctionExpression(
  //인수 전달 공간
  function() {
    console.log('콜백 함수 실행!');
  }
)

//비동기 블라 블라 뭐시기 ㅋㅋㅋ 뭔데 ?

const movePage = function(url,success,fail){

  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url)
  }else{
    fail()
  }
}



movePage(
  'www.naver.com',
  function(url){
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');
    
    setTimeout(() => {
      window.location.href = url
    }, 3000);
    
  },
  function(){
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
)



//! 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

//!변수의 보호를 위해 탄생하였읍니다.

//함수를 만듦과 동시에 함수를 실행해줄 것이다 !!!!!!!!! 이피패턴 !!!
//incapsulaion 은닉화 캡슐화
//옛날에는 함수 안에 싹 다 넣어서 만들었는데
//이제는 함수 스코프를 만들어서 다른 함수들이 삐져나오지 못하게 만들었다.
const MASTER = (function (){
  //마스터는 값을 받는다.
  var x = 10;
console.log('즉시 함수 !');
return '퉤';
})() // 함수를 바로 실행 시켜부러


//함수는 값을 내뱉을 수 있어
console.log(MASTER);
//마스터는 함수가 아니라서 여기에서 쓸 수 있어.

//!2. 은닉화
const MASTER1 = (function (){
  //마스터는 값을 받는다.
  var x = 10;
  let uid = 'ajttk5454'
return {
  getKey() {
    return uid;
  },
  setKey(value) {
    uid = value;
  }
};
})() // 함수를 바로 실행 시켜부러


//함수는 값을 내뱉을 수 있어
console.log(MASTER1.setKey('새로운 비밀번호'));
//마스터는 함수가 아니라서 여기에서 쓸 수 있어.

//함수는 선언부는 매개변수(parameter)를 받고 실행부에서는 인수(argument)를 받을 수 있다. 
//선언부 function sum (a,b) {}
//실행부 sum (10,5)


//!무슨 말일까 모르겠읍다.

import { css as c } from "css.js";


c()

const MASTER2 = (function (g){

  console.log( g );

  var x1 = 10;
  let uid = 'Ajttk753!@'

  return {
    getKey(){
      return uid;
    },
    setKey(value){
      uid = value;
    }
  };

})(window)




console.log(MASTER2.setKey('새로운 비밀번호'));

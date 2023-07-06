/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자
----------------------------------------------------------- */

// number

const YEAR = 2023;

console.log ( typeof string(YEAR) );  // 명시적 형 변환
console.log ( YEAR + '1' );  // 암시적 형 변환

// undefined, null

let days = null;
console.log( typeof String(null) );
console.log( null + '');

let undef = undefined;
console.log( typeof String(undefined));
console.log( undefined + '');

// boolean

let isClicked = true;
console.log(String(isClicked));





/* 데이터 → 숫자 
----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));


// null

let bankbook = null;
console.log(Number(bankbook));

// boolean

let cutie = false;
console.log(Number(cutie));

// string

let num = '250';
console.log( Number(num) );
console.log( +num );  // 암시적 형변환 > 선생님이 제일 많이쓰시는 방법
console.log( num * 1 );
console.log( num / 1 );

// numeric string

let width = '105.3px';
console.log( Number(width) ); // NaN이 나옴

let w = parseFloat(width) // parse: 해석하다  /  parseInt: 정수만 반환
console.log( w );



/* 데이터 → 불리언
---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log( Boolean(friend) );
console.log( Boolean(backbook) );
console.log( Boolean(0) );
console.log( Boolean(NaN) );
console.log( Boolean('') );   // 까지는 false가 나옴
console.log( Boolean(1) );
console.log( Boolean(0) );

console.log( '암시적 형 변환' : + !!false ); // ! : true > 값을 뒤집음 > !! > 한번 더 뒤집음 > false

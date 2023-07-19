/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */



// console.log(this);
// console.log(this === e.currentTarget);
// console.log(e.currentTarget);    
// console.log( e.target );   > 내가 누른 대상을 수집


const container = getNode('.container');



function handleDelegation (e){
  
  let target = e.target;


  let li = target.closest('li');

  if(!li) return;

  let className = attr(li,'class');
  let dataName = attr(li,'data-name');

  
  if(className === 'home'){
    console.log('홈 실행!');
  }

}


container.addEventListener('click',handleDelegation)




/* 속성을 사용한 위임 ------------------ */








/* 노드를 사용한 위임 ------------------ */














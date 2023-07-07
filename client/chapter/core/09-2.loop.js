
  //   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
  // - 순환 중단
  
  
  /* 
  let repeat =  prompt('몇번 반복하시겠습니까?',0);
  do{
  @@ -44,6 +44,71 @@ do{
    repeat--;
  }while(repeat)
   */
  
  // do ~ while 문 (순환)
  // - 위 do ~ while 문을 순방향으로 순환되도록 설정
  
  
  
  let first = document.querySelector('.first');
  // let heading = document.querySelector('.heading');
  // let second = document.querySelector('.second');
  
  // first = first.nextSibling.nextSibling.nextSibling.nextSibling;
  
  // do{
  //   first = first.nextSibling;
  
  // }while(first.nodeType !== document.ELEMENT_NODE);
  
  // // 반복문 멈추는 시점 => 무한루프 
  // console.log(first);
  
  function next(node){
    do{
      node = node.nextSibling;
    }
    while(node.nodeType !== 1)
  
    return node;
  }
  
  
  const second = next(first);
  console.log(second);
  
  
  
  function prev(node){
  
    do{
      node = node.previousSibling;
  
    }while(node.nodeType !== 1)
  
    return node;
  }
  
  
  console.log( prev(second) );
  
  
  // const div = next(heading);
  // console.log(div);
  
  
  
  
  // 로직 실행
  
  
  
  
  
  
  
  
  
  
  
  
  
  // do ~ while 문 (순환)
  // - 위 do ~ while 문을 순방향으로 순환되도록 설정
  
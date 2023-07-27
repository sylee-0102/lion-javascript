const URL = 'https://jsonplaceholder.typicode.com/users';


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


const tiger = async (options) => {

  
  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }


  const response = await fetch(url,restOptions);

  if(response.ok){
     response.data = await response.json();
  }

  return response;
}


// const response = await tiger({
//   url:URL,
// });
// const userData = response.data;

// console.log( userData );




tiger.get = (url,options)=>{
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url,body,options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options)=>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}

tiger.put = (url,body,options)=>{
  tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}







// console.log( userData );

// userData.forEach((item)=>{
  // console.log( item );
// })




// const data = await tiger('https://www.naver.com');


// console.log( data.data );



// await tiger('www.naver.com')






// const response = await fetch('https://jsonplaceholder.typicode.com/user')

// console.log( response );

// if(response.ok){
//   const data = await response.json();
//   console.log( data );
// }
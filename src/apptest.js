
const  sum = (a=0, b=0) => {
    if(typeof a != 'number' || typeof b != 'number'){
               return 0;
    }
    else
      return (a+b)
}

const sub = (a=0, b=0) => {
  if(typeof a != 'number' || typeof b != 'number'){
             return 0;
  }
  else
    return (a-b)
}


function hello(name){
  if (name == 'meena'){
     return 'hello ' + name
  }
  else{
    return 'hi' + name
  }
}

export {sum,sub,hello}
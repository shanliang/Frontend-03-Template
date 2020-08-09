function find(string){
  let findA = false;
  let findB = false;
  let findC = false;
  let findD = false;
  let findE = false;
  let findF = false;
  for(let i in string){
    if(i == 'a'){
      findA = true;
    }else if (findA && (i == 'b')){
      findB = true;
    }else if (findB && (i == 'c')){
      findC = true;
    }else if (findC && (i == 'd')){
      findD = true;
    }else if (findD && (i == 'e')){
      findE = true;
    }else if (findE && (i == 'f')){
      return true;
    }else{
      let findA = false;
      let findB = false;
      let findC = false;
      let findD = false;
      let findE = false;
      let findF = false;
    }
  }
  return false;
}
find('abcdef')

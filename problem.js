
function wave(str){
    // Code here
    let arr = [];
    let strLength = str.length;
    
    for (let i = 0; i < strLength; i++){
        let curr = str[i].toUpperCase();
        curr += str[i+1]
      if (curr.length === str.length){
        curr.push(curr)
      }
      
        return strLength
    }
  }

  console.log(wave("hello"))





function replaceRepeatingChars(string){

   let array=string.split("");

    for (let index = 0; index < array.length; index++) {
       
        while(array[index]===array[index+1]){
             array.splice(index,1);
        }
        
    }

   console.log(array.join(""));
   
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
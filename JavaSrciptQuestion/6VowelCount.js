function vowelCount(text1){
    let vowels="aeiouAEIOU";
    let count=0;
   for(let char of text1)
   {
    if(vowels.includes(char)){
        count++
    }
   }
    console.log(`Number of vowels: ${count}`);
}


vowelCount('Jonathan');
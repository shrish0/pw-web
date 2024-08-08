function removeDuplicates(array){
    return [...new Set(array)]
}
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange', 'banana']));
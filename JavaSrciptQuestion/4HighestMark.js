function findHighestNumber(marks){
    highest=marks[0];
    marks.forEach(element => {
        highest=(highest>element)?highest:element;
    });
    return highest;
}

console.log(findHighestNumber([1,2,3,4,6,9]));
console.log(findHighestNumber([3,1,8,3,9,10]));

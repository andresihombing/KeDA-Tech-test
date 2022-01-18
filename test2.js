function solution(array){
    for(let i=0; i<array.length; i++){
        let current = array[i];
        let j = i-1;
        while((j > -1) && (array[j] > current)){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    return array;
}

var array = [1,4,6,2,7,8,3,9,5,0];
console.log( solution(array) );

module.exports = solution;
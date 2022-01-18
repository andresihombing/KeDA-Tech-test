function solution(input){
    let i = 0;
    let length = input.length - 1;

    while(length > i){
        if(input[i++] != input[length--]){
            return false;
        }
    }
    return true;
}

var input = 'nababan';
console.log( solution(input) );

module.exports = solution;

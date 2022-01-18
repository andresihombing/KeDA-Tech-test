function solution (input){
    if(input % 3 == 0 && input % 5 == 0){
        return 'fish bash';
    }else if(input % 3 == 0){
        return 'fish';
    }else if(input % 5 == 0){
        return 'bash';
    }
}

var input = 90;
console.log( solution(input) );

module.exports = solution;
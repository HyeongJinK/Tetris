var result = Array(Array(9),Array(9),Array(9),Array(9),Array(9),Array(9),Array(9),Array(9),Array(9));
result[0][4] = 1



function randomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function numberCheck(inputNum, arrayNum, location) {
    
}
//배열 안에 같은 값이 있을 경우 false
function arrayDuplicateValueCheck(inputNum, arrayNum) {
    for(var i = 0; i < 9; i++) {
        if (result[arrayNum][i] == inputNum) {
            return false;
        }
    }
    return true;
}
//검사할 가로배열 시작값, 배열에서 검사할 시작값 설정
function horizontalBeginNumberInit(num) {
   switch(num) {
        case 0:
        case 1:
        case 2:
            return 0;
        case 3:
        case 4:
        case 5:
            return 3;
        case 6:
        case 7:
        case 8:
            return 6;
    } 
}
//입력한 값에서 가로열에서 중복된 값이 있는 지 검사
function horizontalDuplicateValueCheck(inputNum, arrayNum, location) {
    var arrayBegin = horizontalBeginNumberInit(arrayNum);
    var begin = horizontalBeginNumberInit(location);
    
    for (var arrayEnd = arrayBegin + 3; arrayBegin < arrayEnd; arrayBegin++) {
        if (arrayBegin == arrayNum) {
            continue;
        }
        for (var end = begin + 3; begin < end; begin++) {
            if (result[arrayBegin][begin] == inputNum) {
                return false;
            }
        }
    }
    return true;
}

console.log(arrayDuplicateValueCheck(1, 0));

console.log(horizontalDuplicateValueCheck(1, 3, 4))

console.log(result)
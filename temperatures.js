/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
}

// Write an answer using console.log()
if( n == 0){
    console.log(0)
} else {
    let res = inputs.sort((a,b) => a - b)
    res[res.length - 1] < 0 ? 
    console.log(res[res.length - 1]) 
    : console.log(res.find(item => item >= 0))
}
// To debug: console.error('Debug messages...');

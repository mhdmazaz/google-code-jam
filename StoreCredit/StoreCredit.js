/* for practice purpose */
/* problem description */
/* https://code.google.com/codejam/contest/351101/dashboard#s=p0 */



var fs = require('fs');
var fileName = './A-large-practice.in';
var content = fs.readFileSync(fileName,'utf8').split('\n');

//console.log(content);

function solve(Credit,Items){
    var sol = '';
    for(var i = 0 ; i < Items.length ; i ++){
        for(var j = i+1 ; j < Items.length ; j ++){
            if(Credit === parseInt(Items[i]) + parseInt(Items[j])){
                sol = '' + (i+1) + ' ' + (j+1);
                break;
            }
        }
    }
  return sol;
}


function main(){
    var str = '';
    var i = 0 ;
    var N = parseInt(content[i++]);
    var caseNum = 1;
    while( content[i] !== ''){
        var credit = parseInt(content[i++]);
        i++;
        var items = content[i].split(' ');
        var sol = solve(credit,items);
        str += 'Case #' + caseNum++ + ': ' + sol + '\n';
        i++;
    }

    fs.writeFileSync("./output", str);
}


main();
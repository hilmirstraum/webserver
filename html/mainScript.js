var num = document.createElement('p');
var lineNum = 0;
var input = document.getElementById("txtArea");

function newLine() {
    lineNum++;
    num.innerHTML = lineNum;
    div.appendChild(num);
    document.getElementById("c").appendChild(document.createElement('div'));
}

function test(e){
    if (e.keyCode == 13) {
        newLine();
        return false;
    }
}

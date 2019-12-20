var row = 40;
var column = 50;
var deadColor_0 = "rgb(255, 255, 255)";
var aliveColor_1 = "rgb(74, 90, 207)"
var wasAliveColor_2 = "rgb(0, 255, 255)";
var grid = new Array(row);
var grid2 = new Array(row);
var startButton = document.getElementById("startButton");
var gameField = document.getElementById("gameField");
var stopButton = document.getElementById('stopButton');
var gameOn = false;
window.onresize = function () {

}

startButton.onclick = function () {
    gameOn = true;
    computeNext();
}
stopButton.onclick = function () {
    gameOn = false;
}

for (var i = 0; i < row; i++) {
    grid[i] = new Array(column);
    grid2[i] = new Array(column);
}

for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
        var li = document.createElement("div");
        li.style.backgroundColor = deadColor_0;
        grid2[i][j] = li;
    }

}

for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
        var li = document.createElement("div");

        li.style.border = 'thin solid black';
        li.style.width = Math.max(gameField.offsetWidth / column).toString() + 'px';
        li.style.height = Math.max(gameField.offsetWidth / column).toString() + 'px';
        //li.style.float ='left';
        li.onclick = onClicked;
        li.onmouseover = OnMOuseOver;
        li.onmouseleave = OnMOuseLeave;
        li.style.backgroundColor = deadColor_0;
        grid[i][j] = li;
    }

}

function computeNext() {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            let neighbours = getNeighbourCount(grid, i, j);
            if (grid[i][j].style.backgroundColor === aliveColor_1) {
                if (neighbours < 2) {
                    grid2[i][j].style.backgroundColor = wasAliveColor_2;
                } else if (neighbours === 2 || neighbours === 3) {
                    grid2[i][j].style.backgroundColor = aliveColor_1;
                } else if (neighbours > 3) {
                    grid2[i][j].style.backgroundColor = wasAliveColor_2;
                }
            } else if (grid[i][j].style.backgroundColor === deadColor_0 ||
                grid[i][j].style.backgroundColor === wasAliveColor_2) {
                if (neighbours === 3) {
                    grid2[i][j].style.backgroundColor = aliveColor_1;
                }
            }

         
        }
    }
    if (gameOn) {
        copyGrid();
        setTimeout(function () {
            computeNext();
        }, 200);
    }
}

function copyGrid() {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            grid[i][j].style.backgroundColor = grid2[i][j].style.backgroundColor
        }
    }
    // for (var i = 0; i < row; i++) {
    //     for (var j = 0; j < column; j++) {
    //         grid2[i][j].style.backgroundColor = deadColor_0;
    //     }
    // }
}

function checkGrids(gid1, grid2) {

    var isSame;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            if (grid[i][j].style.backgroundColor != grid2[i][j].style.backgroundColor) {
                isSame == false;
                break;

            }
        }
    }
    return isSame;
}

function onClicked() {

    if (this.style.backgroundColor != aliveColor_1) {
        this.style.backgroundColor = aliveColor_1;
    }
    else if (this.style.backgroundColor != deadColor_0) {
        this.style.backgroundColor = deadColor_0;
    }

}

function hallo() {
    console.log(this);
}

function OnMOuseOver() {
    if (this.style.backgroundColor != aliveColor_1 || this.style.backgroundColor != wasAliveColor_2) {
        this.style.backgroundColor = 'rgb(157, 206, 143)';
    }
}

function OnMOuseLeave() {
    if (this.style.backgroundColor != aliveColor_1) {
        this.style.backgroundColor = deadColor_0;
    }
    
}

function getNeighbourCount(grid, x, y) {

    let sum = 0;
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            let cols = (y + i + this.column) % this.column;
            let rows = (x + j + this.row) % this.row;
            if (grid[rows][cols].style.backgroundColor == aliveColor_1) {
                sum++;
            }
        }
    }
    if (grid[x][y].style.backgroundColor == aliveColor_1) {
        sum--;
    }

    return sum;
}


window.onresize = function () {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            grid[i][j].style.width = (gameField.offsetWidth / row).toString() + 'px';
            grid[i][j].style.height = (gameField.offsetWidth / row).toString() + 'px';
        }
    }
}




var htmlGrid = document.createElement("div");

gameField.appendChild(htmlGrid);
for (var i = 0; i < grid.length; i++) {
    var rowy = document.createElement("div");
    //rowy.style.lineHeight = '1'
    rowy.style.float = 'left';
    for (var j = 0; j < grid[i].length; j++) {

        rowy.appendChild(grid[i][j]);
    }
    htmlGrid.appendChild(rowy);

}











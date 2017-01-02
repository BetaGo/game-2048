/**
 * Created by ironman on 17-1-2.
 */
var board = [];
var score = 0;

$(document).ready(function () {
    newGame();

});

function newGame() {
    //初始化棋盘格
    init();
    //在随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for(var i=0; i<4; i++) {
        for (var j=0; j<4; j++) {

            var gridCell = $('#grid-cell' + '-' + i + '-' + j);
            gridCell.css('top', getPosTop(i, j) + 'px');
            gridCell.css('left', getPosLeft(i, j) + 'px');
        }
    }

    for(var i=0; i<4; i++) {
        board[i] = [];
        for (var j=0; j<4; j++) {
            board[i][j] = 0;
        }
    }

    updateBoardView();

}

function updateBoardView() {

    $('.number-cell').remove();
    for ( var i=0; i<4; i++ ) {
        for ( var j=0; j<4; j++ ) {
            $('#grid-container').append('<div class="number-cell" id="number-cell-' + i +'-' + j + '"></div>');

            var theNumberCell = $('#number-cell-'+ i +'-' + j );

            if ( board[i][j] == 0 ) {
                theNumberCell.css('width', '0px');
                theNumberCell.css('height', '0px');
                theNumberCell.css('top', getPosTop(i, j)+50+'px');
                theNumberCell.css('left', getPosLeft(i, j) +50+'px');
            } else {
                theNumberCell.css('width', '100px');
                theNumberCell.css('height', '100px');
                theNumberCell.css('top', getPosTop(i, j)+'px');
                theNumberCell.css('left', getPosLeft(i, j)+'px');
                theNumberCell.css('background', getNumberBackground( board[i][j]));
                theNumberCell.css('color', getNumberColor( board[i][j]));
                theNumberCell.text( board[i][j]);
            }
        }
    }

}


function generateOneNumber() {

    if(noSpace(board)) {
        return false;
    }
    //随机一个位置
    if(spaceArr) {
        spaceArr = [];
    }
    var spaceArr = [];

    for (var i=0; i<4; i++ ) {
        for (var j=0; j<4; j++ ) {
            if(board[i][j] == 0) {
                spaceArr.push([i,j]);
            }
        }
    }
    var randomSpaceNum = Math.floor(Math.random() * spaceArr.length);
    var randx = spaceArr[randomSpaceNum][0];
    var randy = spaceArr[randomSpaceNum][1];

    //随机一个2或4
    var randomNumber = Math.random()<0.5 ? 2 : 4;

    //在随机位置显示随机数字
    board[randx][randy] = randomNumber;
    console.log(board[randx][randy]);
    showNumberWithAnimation(randx, randy, randomNumber);

    return true;
}
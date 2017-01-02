/**
 * Created by ironman on 17-1-2.
 */
function showNumberWithAnimation(i, j, randomNumber) {

    var numberCell = $('#number-cell-' + i + '-' + j);

    numberCell.css('background', getNumberBackground(randomNumber));
    numberCell.css('color', getNumberColor(randomNumber));
    numberCell.text(randomNumber);

    numberCell.animate({
        width: '100px',
        height: '100px',
        top: getPosTop(i,j),
        left: getPosLeft(i,j)
    },50);
}
const miniBox1 = document.getElementById('mini-box-1');
miniBox1.addEventListener('click', function (e, num = 0) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox2 = document.getElementById('mini-box-2');
const miniBox3 = document.getElementById('mini-box-3');
const miniBox4 = document.getElementById('mini-box-4');
const miniBox5 = document.getElementById('mini-box-5');
const miniBox6 = document.getElementById('mini-box-6');
const miniBox7 = document.getElementById('mini-box-7');
const miniBox8 = document.getElementById('mini-box-8');
const miniBox9 = document.getElementById('mini-box-9');

const allBoxes = [miniBox1, miniBox2, miniBox3, miniBox4, miniBox5, miniBox6, miniBox7, miniBox8, miniBox9];
const allLines = Array.prototype.slice.call(document.getElementsByClassName('line'));

const minimizeVars = ['box1DecreaseSize'];
const maximizeVars = ['box1IncreaseSize'];
let isMaximizedBool = false;

let miniBoxOnNumber;

// Maximizes first box, and hides rest. 
function miniBoxMaximize(num) {
    miniBox1.style.animation = `${maximizeVars[num]} 0.3s ease-out forwards`;
    miniBoxOnNumber = num;
    isMaximizedBool = true;
    hideRest(allBoxes[num]);
}

function minimizeMiniBox() {
    if (isMaximizedBool) {
        allBoxes[miniBoxOnNumber].style.animation = `${minimizeVars[miniBoxOnNumber]} 0.3s ease-out forwards`;
        unHideRest(allBoxes[miniBoxOnNumber]);
        isMaximizedBool = false;
    }
}

// Given a box, hides rest except given box
function hideRest(miniBox) {
    for (let i = 0; i < allBoxes.length; i++) {
        if (!allBoxes[i].isEqualNode(miniBox)) {
            allBoxes[i].style.animation = 'opacityFadeOut 0.25s ease-out forwards';
        }
    }
    for (let i = 0; i < allLines.length; i++) {
        allLines[i].style.animation = 'opacityFadeOut 0.25s ease-out forwards';
    }
}

// Given a box, shows rest except given box since given box has its own animation going on
async function unHideRest(miniBox) {
    await new Promise(r => setTimeout(r, 200));
    for (let i = 0; i < allBoxes.length; i++) {
        if (!allBoxes[i].isEqualNode(miniBox)) {
            allBoxes[i].style.animation = 'opacityFadeIn 0.25s ease-out forwards';
        }
    }
    for (let i = 0; i < allLines.length; i++) {
        allLines[i].style.animation = 'opacityFadeIn 0.25s ease-out forwards';
    }
}
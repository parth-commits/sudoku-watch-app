const miniBox1 = document.getElementById('mini-box-1');
miniBox1.addEventListener('click', function (e, num = 0) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox2 = document.getElementById('mini-box-2');
miniBox2.addEventListener('click', function (e, num = 1) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox3 = document.getElementById('mini-box-3');
miniBox3.addEventListener('click', function (e, num = 2) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox4 = document.getElementById('mini-box-4');
miniBox4.addEventListener('click', function (e, num = 3) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox5 = document.getElementById('mini-box-5');
miniBox5.addEventListener('click', function (e, num = 4) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox6 = document.getElementById('mini-box-6');
miniBox6.addEventListener('click', function (e, num = 5) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox7 = document.getElementById('mini-box-7');
miniBox7.addEventListener('click', function (e, num = 6) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox8 = document.getElementById('mini-box-8');
miniBox8.addEventListener('click', function (e, num = 7) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });
const miniBox9 = document.getElementById('mini-box-9');
miniBox9.addEventListener('click', function (e, num = 8) {
    e.stopPropagation();
    miniBoxMaximize(num);
  });

const allBoxes = [miniBox1, miniBox2, miniBox3, miniBox4, miniBox5, miniBox6, miniBox7, miniBox8, miniBox9];
const allLines = Array.prototype.slice.call(document.getElementsByClassName('line'));

const minimizeVars = ['box1DecreaseSize', 'box2DecreaseSize', 'box3DecreaseSize', 'box4DecreaseSize', 'box5DecreaseSize', 'box6DecreaseSize', 'box7DecreaseSize', 'box8DecreaseSize', 'box9DecreaseSize'];
const maximizeVars = ['box1IncreaseSize', 'box2IncreaseSize', 'box3IncreaseSize', 'box4IncreaseSize', 'box5IncreaseSize', 'box6IncreaseSize', 'box7IncreaseSize', 'box8IncreaseSize', 'box9IncreaseSize'];
let isMaximizedBool = false;

let miniBoxOnNumber;

// Maximizes first box, and hides rest. 
function miniBoxMaximize(num) {
    allBoxes[num].style.animation = `${maximizeVars[num]} 0.3s ease-out forwards`;
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
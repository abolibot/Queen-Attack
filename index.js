const buttons = Array.from(document.getElementsByClassName("queen"));
const checkBtn = document.querySelector("#check-btn");
const resetBtn = document.querySelector("#reset-btn");
const selectedButtons = [];
buttons.forEach(button => {
    button.id = buttons.indexOf(button) + 1;
    button.addEventListener('click', () => {
        const buttonClassList = Array.from(button.classList)
        const icon = button.firstElementChild;
        resetBtn.disabled = false;
        resetBtn.classList.remove('disabled');
        if (selectedButtons.length === 0 && !buttonClassList.includes('selected')) {
            icon.classList.remove('inactive');
            button.classList.add('selected');
            selectedButtons.push(parseInt(button.id));
        } else if (selectedButtons.length === 1 && !buttonClassList.includes('selected')) {
            icon.classList.remove('inactive');
            button.classList.add('selected');
            selectedButtons.push(parseInt(button.id));
            checkBtn.disabled = false;
            checkBtn.classList.remove('disabled');
        } else if (selectedButtons.length < 2 || buttonClassList.includes('selected')) {
            icon.classList.add('inactive');
            button.classList.remove('selected');
            selectedButtons.splice( selectedButtons.indexOf(parseInt(button.id)) , 1);
            checkBtn.disabled = true;
            checkBtn.classList.add('disabled')
        }
    });
});

checkBtn.addEventListener('click', () => {
    console.log(selectedButtons);
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled')
    })
    selectedButtons.sort(function(a, b){return a - b});
    let position1 = selectedButtons[0];
    let position2 = selectedButtons[1];
    let positionDifference = position2 - position1;
    
    if ((positionDifference <= 7) && (position1 < 8) && (position2 <= 8)) {
        console.log(1);
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 8) && (position1 < 16) && (position2 > 8) && (position2 <= 16)) {
        console.log(1 + " row 2");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 16) && (position1 < 24) && (position2 > 16) && (position2 <= 24)) {
        console.log(1 + "row 3");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 24) && (position1 < 32) && (position2 > 24) && (position2 <= 32)) {
        console.log(1 + "row 4");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 32) && (position1 < 40) && (position2 > 32) && (position2 <= 40)) {
        console.log(1 + "row 5");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 40) && (position1 < 48) && (position2 > 40) && (position2 <= 48)) {
        console.log(1 + "row 6");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 48) && (position1 < 56) && (position2 > 48) && (position2 <= 56)) {
        console.log(1 + "row 7");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference <= 7) && (position1 > 56) && (position1 < 64) && (position2 > 56) && (position2 <= 64)) {
        console.log(1 + "row 8");
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 1; i < position2; i += 1) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference - 16) % 8 === 0) {
        console.log(8);
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 8; i < position2; i += 8) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference - 18) % 9 === 0 && (position1 % 8 != 0) && (((position2 % 8) > (position1 % 8)) || (position2 % 8 === 0))) {
        console.log(9);
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 9; i < position2; i += 9) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else if ((positionDifference - 14) % 7 === 0 && (position2 % 8 != 0) && (((position2 % 8) < (position1 % 8)) || (position1 % 8 === 0))) {
        console.log(7);
        buttons[position1 - 1].classList.add('under-attack');
        buttons[position2 - 1].classList.add('under-attack');
        for (let i = position1 + 7; i < position2; i += 7) {
            buttons[i - 1].classList.add('attack-path');
        };
    } else {
        buttons[position1 - 1].classList.add('safe');
        buttons[position2 - 1].classList.add('safe');
    }
});



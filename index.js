const buttons = Array.from(document.getElementsByClassName("queen"));
const selectedButtons = [];
buttons.forEach(button => {
    button.id = buttons.indexOf(button) + 1;
    button.addEventListener('click', () => {
        const buttonClassList = Array.from(button.classList)
        const icon = button.firstElementChild;
        if (selectedButtons.length < 2 && !buttonClassList.includes('selected')) {
            icon.classList.remove('inactive');
            button.classList.add('selected');
            selectedButtons.push(parseInt(button.id));
        } else if (selectedButtons.length < 2 || buttonClassList.includes('selected')) {
            icon.classList.add('inactive');
            button.classList.remove('selected');
            selectedButtons.splice( selectedButtons.indexOf(parseInt(button.id)) , 1);
        }
    });
});


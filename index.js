const buttons = Array.from(document.getElementsByClassName("queen"));
const selectedButtons = [];
buttons.forEach(button => {
    button.id = buttons.indexOf(button) + 1;
    button.addEventListener('click', () => {
        const icon = button.firstElementChild;
        icon.classList.toggle('inactive');
        button.classList.toggle('selected');
        const buttonClassList = Array.from(button.classList)
        if (buttonClassList.includes('selected')) {
            selectedButtons.push(parseInt(button.id));
        } else {
            selectedButtons.splice( selectedButtons.indexOf(parseInt(button.id)) , 1)
        }
        console.log(selectedButtons);
    });
});


function setCaretPosition(ctrl, pos) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
}

const input = document.getElementById('todofield');
setCaretPosition(input, input.value.length);
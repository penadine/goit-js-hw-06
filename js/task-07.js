const ref = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

ref.fontSizeControl.addEventListener('input', updateFontSize)

function updateFontSize() {
    const currentFontSize = ref.fontSizeControl.value + 'px';
    ref.text.style.fontSize = currentFontSize;
}
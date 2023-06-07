const ref = {
  changeColorBtn: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
}

ref.changeColorBtn.addEventListener('click', changeBackgroundColor);

  function changeBackgroundColor() {
    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
    ref.colorSpan.textContent = randomColor;
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
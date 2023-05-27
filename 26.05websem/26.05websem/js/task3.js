function guessNumber() {
  function calculateResult(imgNum) {
    const res = imgNum * 2 + 7;
    return res;
  }

  const imgNum = Number(prompt("Загадайте число:"));
  const result = calculateResult(imgNum);

  alert("Итог: " + imgNum);
  alert("Вы задумали: " + result);
}

guessNumber();
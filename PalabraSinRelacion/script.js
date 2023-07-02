
const words = document.querySelectorAll('.word');
const tick = document.getElementById('tick');
const cross = document.getElementById('cross');

words.forEach(word => {
  word.addEventListener('click', () => {
    const isCorrect = word.getAttribute('data-correct') === 'true';
    const row = word.classList[1];
    const wordsInRow = document.querySelectorAll(`.${row}`);
    wordsInRow.forEach(w => w.classList.add('disabled'));

    if(isCorrect) {
      wordsInRow.forEach(w => w.classList.replace('btn-info','btn-success') )
    } else {
      wordsInRow.forEach(w => w.classList.replace('btn-info','btn-danger') )
    }
  });
});

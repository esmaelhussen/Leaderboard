const addScore = (name, score, scores) => {
  if (name && score) {
    scores.push({ name, score });
  }
};

const renderScores = (scores) => {
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.name}: ${score.score}`;
    li.classList.add('score-item');
    scoresList.appendChild(li);
  });
};

export { addScore, renderScores };

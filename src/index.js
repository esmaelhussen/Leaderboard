import _ from 'lodash';
import './style.css';

const scores = [];

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

document.getElementById('refresh').addEventListener('click', () => {
  renderScores(scores);
});

document.getElementById('submit').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = parseInt(document.getElementById('score').value, 10);
  addScore(name, score, scores);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

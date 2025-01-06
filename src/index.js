import _ from 'lodash';
import './style.css';
import renderScores from './renderScores.js';
import addScore from './addScore.js';

const scores = [];

document.getElementById('refresh').addEventListener('click', () => {
  renderScores(scores);
});

document.getElementById('submit').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addScore(name, parseInt(score, 10), scores);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

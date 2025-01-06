import _ from 'lodash';
import './style.css';
import { renderScores, addScore } from './function.js';

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

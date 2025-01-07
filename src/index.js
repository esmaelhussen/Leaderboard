import { postGame, getGame } from './function.js';
import './style.css';

const allScore = document.querySelector('.scores');
const nameone = document.querySelector('.name');
const scoreone = document.querySelector('.score');
const submitButon = document.querySelector('.btn-submit');
const refreshButon = document.querySelector('.btn-refresh');

const addScore = async (event) => {
  event.preventDefault();
  await postGame({ user: nameone.value, score: +scoreone.value });
  nameone.value = '';
  scoreone.value = '';
};

const renderScores = async () => {
  const scores = await getGame();
  allScore.innerHTML = '';
  scores.forEach(({ user, score }) => {
    allScore.innerHTML += `<li class="score__list">${user} : ${score}</li>`;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderScores();
});

submitButon.addEventListener('click', addScore);
refreshButon.addEventListener('click', renderScores);
import { postGame, getGame } from "./function.js";
import "./style.css";

const allScore = document.querySelector(".scores");
const name = document.querySelector(".name");
const score = document.querySelector(".score");
const submitButon = document.querySelector(".btn-submit");
const refreshButon = document.querySelector(".btn-refresh");

const addScore = async () => {
  await postGame({ user: name.value, score: score.value });
  name.value = "";
  score.value = "";
};

const renderScores = async () => {
  const scores = await getGame();
  allScore.innerHTML = "";
  scores.forEach(({ user, score }) => {
    allScore.innerHTML += `<li class="score__list">${user} : ${score}</li>`;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderScores();
});

submitButon.addEventListener("click", addScore);
refreshButon.addEventListener("click", renderScores);

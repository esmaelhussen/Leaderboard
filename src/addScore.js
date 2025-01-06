const addScore = (name, score, scores) => {
    if (name && score) {
      scores.push({ name, score });
    }
  };
  
  export default addScore;
  
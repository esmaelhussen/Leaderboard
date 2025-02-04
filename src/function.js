const API_URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JDD1oYSqgnmK1ECpkiFN/scores/";

export const getGame = async () => {
  const fetchGame = await fetch(API_URL);
  const data = await fetchGame.json();
  return data.result;
};

export const postGame = async (score) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(score),
  });
};

/*
post method for creating a game

const creategame = async () => {
  const url =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
  const data = { name: "esmael game" };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error creating game:", error);
  }
};
creategame();
*/

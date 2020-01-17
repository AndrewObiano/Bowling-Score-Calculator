module.exports = function(scoreBoard) {
  let score = 0;

  // loop up to 9th frame
  for (let i = 0; i < 9; i++) {
    // open frame
    score += scoreBoard[i].first;
    score += scoreBoard[i].second;

    // if strike
    if (scoreBoard[i].first === 10) {
      score += scoreBoard[i + 1].first;
      score += scoreBoard[i + 1].second;
      // if strike on next throw
      if (scoreBoard[i + 1].first === 10) {
        if (i < 8) {
          score += scoreBoard[i + 2].first; // add score from next two frames over.. only applies up to frame 9
        }
      }
      // if spare
    } else if (scoreBoard[i].first + scoreBoard[i].second === 10) {
      score += scoreBoard[i + 1].first;
    }
  }

  // last frame
  score += scoreBoard[9].first;
  score += scoreBoard[9].second;
  score += scoreBoard[9].third;

  return score;
};

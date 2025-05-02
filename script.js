function checkAnswer(button, isCorrect) {
    if (isCorrect) {
      alert("Correct! 🥳");
      const currentPage = window.location.pathname;
      const pageNumber = parseInt(currentPage.match(/\d+/));
      if (pageNumber < 5) {
        window.location.href = `question${pageNumber + 1}.html`;
      } else {
        window.location.href = "win.html";
      }
    } else {
      alert("Oops! Try again!");
    }
  }
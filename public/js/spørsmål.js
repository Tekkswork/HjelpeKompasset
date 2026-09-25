



function showMore(id) {
      const moreText = document.getElementById(`moreText${id}`);
      const button = document.getElementById(`toggleBtn${id}`);

      if (getComputedStyle(moreText).display === "none") {
        moreText.style.display = "inline";
        button.textContent = "vis mindre";
      } else {
        moreText.style.display = "none";
        button.textContent = "vis";
      }
    }
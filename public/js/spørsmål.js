



function showMore() {
      const moreText = document.getElementById("moreText");
      const button = document.getElementById("toggleBtn");

      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "vis mindre";
      } else {
        moreText.style.display = "none";
        button.textContent = "vis";
      }
    }
function updateCountdown() {
    var countdownElement = document.getElementById("countdown");
    var seconds = parseInt(countdownElement.textContent);
    seconds--;
    countdownElement.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(timer);
      window.location.href = "https://skillsfuture.gobusiness.gov.sg/support-and-programmes/";
    }
  }

  // Update countdown timer every second
  var timer = setInterval(updateCountdown, 1000);
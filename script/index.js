



async function fetchWeather() {
    const apiKey = 'ed8f7b7ef329fb8bc922e91ee4aa4206'; // Corrected API key format
    const city = 'Chennai';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not available');
        
        const data = await response.json();
        const temperature = Math.round(data.main.temp);
        document.getElementById('weather').innerHTML = `${temperature}°C`;
    } catch (error) {
        document.getElementById('weather').innerHTML = 'Failed to load weather';
    }
}

fetchWeather();



window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("nav-fixed");
    } else {
        navbar.classList.remove("nav-fixed");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let logo = document.querySelector(".navbar-brand img");

        if (window.scrollY > 50) {
            logo.src = "/assets/images/Coralmin.png"; // Change to new logo
        } else {
            logo.src = "/assets/images/Logo  Corallogo.png"; // Original logo
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar-brand");

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});





function showImage(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
}


document.querySelectorAll('.gallery a').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('modalImage').src = this.href;
    });
});



  // Show scroll-to-top button on scroll
  window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



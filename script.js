// 🎉 Confetti on Click
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    let confetti = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function createConfetti(x, y) {
      for (let i = 0; i < 50; i++) {
        confetti.push({
          x,
          y,
          r: Math.random() * 6 + 4,
          dx: (Math.random() - 0.5) * 10,
          dy: (Math.random() - 0.5) * 10,
          color: `hsl(${Math.random() * 360}, 100%, 60%)`
        });
      }
    }

    function updateConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((c, i) => {
        c.x += c.dx;
        c.y += c.dy;
        c.dy += 0.2;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        if (c.y > canvas.height) confetti.splice(i, 1);
      });
      requestAnimationFrame(updateConfetti);
    }

    window.addEventListener("click", e => createConfetti(e.clientX, e.clientY));
    updateConfetti();

    // ⌨️ Typewriter
    const typewriterText = "To my love, Jackie...\n\nEvery day with you is a blessing. 💕\nYou make my world brighter, my smile wider, and my heart fuller.\nHappy 2 months, my sweet sweet girl!\nAnd many many more to come";
    const typewriterEl = document.getElementById("typewriter");
    let charIndex = 0;
    function typeWriter() {
      if (charIndex < typewriterText.length) {
        typewriterEl.innerHTML += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 40);
      }
    }
    typeWriter();

    // 🕰️ Countdown
    const countdownEl = document.getElementById("countdown");
    const anniversaryStart = new Date("2025-04-07T00:00:00");

    function updateCountdown() {
      const now = new Date();
      let diff = now - anniversaryStart;

      const totalSecs = Math.floor(diff / 1000);
      const y = Math.floor(totalSecs / (365.25 * 24 * 3600));
      const mo = Math.floor((totalSecs % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600));
      const d = Math.floor((totalSecs % (30.44 * 24 * 3600)) / (24 * 3600));
      const h = Math.floor((totalSecs % (24 * 3600)) / 3600);
      const m = Math.floor((totalSecs % 3600) / 60);
      const s = totalSecs % 60;

      countdownEl.textContent = `Together for: ${y}y ${mo}m ${d}d ${h}h ${m}m ${s}s 💞`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 💌 Rotating Notes
    const loveNotes = [
      "The way you smile lights up my whole world 🌟",
    "April 7th — the day we made it official 🏡",
    "You’re my favorite hello and my hardest goodbye 😘",
    "I still get butterflies when I see you 💓",
    "You make every day feel like a dream come true 🌈",
    "Your laughter is my favorite sound 🎶",
    "You're the prettiest girl in the world 🌹",
    "Every moment with you is a treasure I cherish 💖",
    "I Looooovvvvve Youuuuu 💕"
    ];
    const noteEl = document.getElementById("love-note");
    let noteIndex = 0;

    function rotateNotes() {
      noteEl.textContent = loveNotes[noteIndex];
      noteIndex = (noteIndex + 1) % loveNotes.length;
    }
    setInterval(rotateNotes, 5000);
    rotateNotes();

    // 🔊 Music Control
    const song = document.getElementById("anniversarySong");
    const toggleMusic = document.getElementById("toggleMusic");
    toggleMusic.addEventListener("click", () => {
      if (song.paused) {
        song.play();
        toggleMusic.textContent = "Pause Music";
      } else {
        song.pause();
        toggleMusic.textContent = "Play Music";
      }
    });

    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 300);

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    const lightboxCaption = document.createElement('p');
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxCaption);

    document.querySelectorAll('.image-grid a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        lightbox.style.display = 'flex';
        lightboxImg.src = link.href;
        lightboxCaption.textContent = link.getAttribute('data-caption');
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

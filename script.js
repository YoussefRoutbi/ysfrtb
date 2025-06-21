const texts = [
    "Youssef Rouatbi",
    "Bac Info Student 💻"
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const delay = 1500;
  const element = document.getElementById("typewriter");

  function type() {
    const current = texts[index];
    if (isDeleting) {
      charIndex--;
      element.textContent = current.substring(0, charIndex);
    } else {
      charIndex++;
      element.textContent = current.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, delay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? speed / 2 : speed);
    }
  }

  type();
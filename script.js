document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  });

  // slider - services wala section
  const slider = document.querySelector(".services-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  const cardWidth = document.querySelector(".service-card").offsetWidth + 32; // card width + gap (2rem = 32px)
  
  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
  
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("messageModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalSubtitle = document.getElementById("modalSubtitle");
    const modalMessage = document.getElementById("modalMessage");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");

    const founderMessage = `
      Welcome to the OBH Group of Companies!<br><br>
      It has been an incredible journey since 1993, when I first set out with a vision to bring information technology into the heart of Kerala’s education system. What began as CEOMATSS, a pioneering initiative to introduce IT@School, was a step toward empowering schools with digital tools and computer literacy at a time when IT was still new to many.<br>
      We started by providing computer textbooks, training teachers, and supplying computer systems to schools. Over the years, this vision evolved into something much larger — a comprehensive ecosystem of educational technology services. From software development, website and app designing, to scholarship examinations, quiz programs, and ability development initiatives, we have continually expanded our horizon to meet the evolving needs of schools and students across Kerala and beyond.<br>
      At OBH, we are driven by a single purpose — to empower the next generation with knowledge, innovation, and technology. Every milestone we achieve is rooted in our belief that quality education and tech integration can transform not just schools, but entire communities.<br>
      I extend my heartfelt gratitude to our dedicated team, valued partners, educators, and institutions who have stood with us through this journey. Together, we will continue to innovate, inspire, and impact the future of education.<br>
      Warm regards,<br>
      <strong>P. Babu</strong><br>
      Founder, OBH Group of Companies
    `;

    const chairmanMessage = `
      It is with great pride and a deep sense of responsibility that I carry forward the legacy of OBH Group of Companies, a foundation laid by my father, Mr. P. Babu — a visionary who revolutionized the IT-in-Education landscape in Kerala as early as 1993. His pioneering spirit and dedication to innovation set the tone for everything OBH stands for today.<br>
      As the second-generation leader, I have taken the helm with a commitment to expand, diversify, and globalize the OBH vision. Under my leadership, we have grown beyond our original education technology focus to include multiple strategic verticals such as Digital Marketing, US Title Insurance, Real Estate, and Financial Services — all integrated under the OBH umbrella.<br>
      My experiences as a Startup India Mentor, Startup Facilitator, Investment Specialist, and Global Speaker have enabled me to bring global insights and scalable solutions into our operations. Today, OBH Group of Companies proudly operates in India, the United States, the United Kingdom, and Dubai, offering end-to-end solutions tailored to emerging markets and futuristic demands.<br>
      At OBH, we are not just building businesses — we are building ecosystems that nurture innovation, enable growth, and create global impact. Our mission is to continuously evolve, adapt, and lead across industries while staying rooted in the values of trust, quality, and social commitment.<br><br>
      To all our clients, partners, and team members: thank you for believing in our vision. The journey ahead is exciting, and together, we will continue to shape a smarter, more connected world.<br><br>
      Warm regards,<br>
      <strong>Shiju Babu</strong><br>
      Chairman, OBH Group of Companies
    `;

    document.querySelectorAll(".read-more-btn").forEach(button => {
      button.addEventListener("click", function () {
        const role = this.getAttribute("data-role");
        if (role === "founder") {
          modalTitle.textContent = "Founder’s Message";
          modalSubtitle.textContent = "Mr. P. Babu – Founder, OBH Group of Companies";
          modalMessage.innerHTML = founderMessage;
          modalImage.src = "WhatsApp Image 2025-05-29 at 14.03.27.jpeg";
        } else {
          modalTitle.textContent = "Chairman’s Message";
          modalSubtitle.textContent = "Mr. Shiju Babu – Chairman, OBH Group of Companies";
          modalMessage.innerHTML = chairmanMessage;
          modalImage.src = "WhatsApp Image 2025-05-28 at 17.52.38.jpeg";
        }
        modal.classList.add("show");
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    window.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });

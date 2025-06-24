<template>
  <div class="testimonial">
    <div class="scroll-arrow left-arrow" @click="previousTestimonial">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 6H23.5" stroke="#E9EFC9" stroke-width="1" />
        <path d="M6 1L1 6L6 11" stroke="#E9EFC9" stroke-width="1" />
      </svg>
    </div>
    
    <!-- Dynamically generated testimonials -->
    <div
      class="testimonial-content"
      v-for="(item, index) in testimonials"
      :key="item.id"
      v-show="currentTestimonial === index"
    >
      <!-- Use updated_text when available, otherwise fallback to original_text -->
      <p class="quote" v-html="item.updated_text || item.original_text"></p>
      <p class="author">{{ item.author }}</p>
      <p class="projects" v-if="item.focus_areas">{{ item.focus_areas.join(', ') }}</p>
    </div>

    <!-- This personality trait combined with her profund understanding of her clients business objectives turned her into a natural strategist and therefore the right person to create remarkable concepts for brands that are determined to offer meaningful and unique experiences.<br>She delivers great results with kindness, joy, special artistic skills and sharp intuition.<br>Look out for this one!</p>
      <p class="author">Lais Hauschild Cobra</p>
      <p class="projects">Estratégia, Branding, Consultora independente<br>July 17, 2014, Lais Hauschild worked with Jessica but they were at different companies</p>

      <p class="quote">Jessica has a natural talent for leadership and for exposing ideas and projects to different audiences. With a keen eye to the customer and user, she proposes creative and personalized solutions, always allied to implementation and schedule.</p>
      <p class="author">Cristina Opsvik</p>
      <p class="projects">specialist in design and management | design strategist | brand architecture<br>November 15, 2019, Cristina reported directly to Jessica</p>
    </div>
    
    <div class="testimonial-content" id="testimonial-3" v-show="currentTestimonial === 3">
      <p class="quote">Jessica is an excellent professional and one of the best managers I've ever had. She is passionate about her job, focused, organized and knows how to use her strengths to deliver awesome projects and create great spaces for customers. Her creativity is powerful and contagious!</p>
      <p class="author">Fernanda Belizario Santos Felizola</p>
      <p class="projects">Head de Arquitetura na Livelo<br>November 25, 2019, Jessica reported directly to Santos</p>
    </div>
    
    <div class="testimonial-content" id="testimonial-4" v-show="currentTestimonial === 4">
      <p class="quote">I worked with Jessica in a great project in the field of hospitality that we are developing in São Paulo, Brazil.<br>Regarding her professional skills, her professionalism, her high levels of commitment and her ability to lead and manage the team she is involved with. Jessica is a very organized person as well as a great creative. She has natural entrepreneurship and it's very pleasant to work with her as a team partner.<br>Jessica's problem solver with deep knowledge, successful track record and she's a very professional project manager.<br>I also want to highlight her personal skills as a human being. Always very kind and with a positive approach.<br>I would definitely recommend her for any job!</p>
      <p class="author">Inês Duque Dias</p>
      <p class="projects">Head of Communication & New Business - Atelier Nini Andrade Silva | Negotiation | Skilled in Communication<br>November 2020, Inês collaborated with Jessica on multiple projects</p>
    </div>
    
    <div class="testimonial-content" id="testimonial-5" v-show="currentTestimonial === 5">
      <p class="quote">I've worked with Jessica for almost 3 years at IHG where she was a joy to work with, not only because of her positive attitude, but also because of her exceptional design sensibility and the passion she brings to all aspects of her work. At one point we shared the FF&E/Architectural design responsibilities of at least 5 large projects that were high touch and all different stages of design. We both had to manage clients and attend meetings both internally and externally, while manage drawing sets, purchasing, agenda, vendors, clients, consultants, and design presentations. Jessica was always willing to jump in and help in any way she could. She was able to consistently contribute to design with thoughtful and creative solutions. Through our time working together, I saw that she has many strengths in all aspects of the design process, from concept to completion. She is also very strong while dealing with clients, both in person and via email. She knows the importance of managing expectations, while also presenting herself very professionally for client facing meetings. I cannot recommend her enough as a colleague and design lead for projects.</p>
      <p class="author">Rachel Ratterman</p>
      <p class="projects">Principal at Fork Design Studio<br>August 13, 2020, Rachel managed Jessica directly<br>Jessica was a great colleague to work with. She managed design projects in the hospitality realm at IHG where she was a joy to work with, not only because of her positive attitude, but also because of her exceptional design sensibility and the passion she brings to all aspects of her work.</p>
    </div>
    

      <p class="quote">I'd like to recommend Jessica as diligent and thorough professional with a vast experience in the hospitality interior design field. We've been working together in the development of large size projects in Brazil for high end hotel chains and always showed in depth knowledge of the matter bringing to the table innovative ideas and solutions to enhance the quality of the spaces she creates.</p>
      <p class="author">Marcos Bastos</p>
      <p class="projects">Partner at VOALB Ltda<br>February 8, 2022, Marcos worked with Jessica on the same team</p>

-->
    <div class="scroll-arrow right-arrow" @click="nextTestimonial">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 6H23.5" stroke="#E9EFC9" stroke-width="1" />
        <path d="M18 1L23 6L18 11" stroke="#E9EFC9" stroke-width="1" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      currentTestimonial: 0,
      testimonials: [],
      intervalId: null
    };
  },
  mounted() {
    // Load testimonials JSON then start auto-rotation
    fetch('/referals/referrals_json.json')
      .then(r => r.json())
      .then(data => {
        this.testimonials = data.testimonials || [];
        if (this.testimonials.length) this.startAutoRotation();
      })
      .catch(err => console.error('Failed to load testimonials JSON', err));

    // Add event listeners for visibility change
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    // Clear the interval when component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    // Remove event listeners
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  methods: {
    nextTestimonial() {
      this.currentTestimonial = this.testimonials.length === 0 ? 0 : (this.currentTestimonial + 1) % this.testimonials.length;
      this.resetAutoRotation();
    },
    previousTestimonial() {
      if (!this.testimonials.length) return;
      this.currentTestimonial = this.currentTestimonial === 0
        ? this.testimonials.length - 1
        : this.currentTestimonial - 1;
      this.resetAutoRotation();
    },
    startAutoRotation() {
      // Auto-rotate testimonials every 8 seconds
      this.intervalId = setInterval(() => {
        this.nextTestimonial();
      }, 8000);
    },
    resetAutoRotation() {
      // Reset the auto-rotation timer when manually changing testimonials
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.startAutoRotation();
    },
    handleVisibilityChange() {
      // Pause auto-rotation when tab is not visible
      if (document.hidden) {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      } else {
        // Resume auto-rotation when tab becomes visible again
        if (!this.intervalId) {
          this.startAutoRotation();
        }
      }
    }
  }
};
</script>

<style scoped>
/* Testimonial Section */
.testimonial {
  background-color: #1F1B1A;
  color: #E9EFC9;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  height: auto;
  min-height: 90vh; /* Balanced height to accommodate review text */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.testimonial-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 6rem 6rem;
  width: 100%;
  height: 100%;
  overflow-y: auto; /* Allow scrolling if content exceeds container */
  opacity: 1;
  transform: translateY(0);
}

.scroll-arrow {
  cursor: pointer;
  padding: 0 1rem;
  z-index: 10;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left-arrow {
  left: 1rem;
}

.right-arrow {
  right: 1rem;
}

.scroll-arrow:hover {
  opacity: 0.7;
}

.quote {
  font-family: 'Instrument Serif', serif !important;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 400; /* Regular for Instrument font */
  line-height: 1.6;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.05em;
  text-transform: none;
  color: #E9EFC9; /* Original color */
}

.author {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 300; /* Light Be Vietnam Pro */
  color: #f2eee3; /* Original color */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

.projects {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 300; /* Light Be Vietnam Pro */
  color: #E9EFC9; /* Original color */
  opacity: 0.8;
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .testimonial {
    padding: 4rem 1rem;
    min-height: 80vh;
  }
  
  .testimonial-content {
    padding: 4rem 2rem;
  }
  
  .scroll-arrow {
    padding: 0 0.5rem;
  }
  
  .scroll-arrow svg {
    width: 20px;
    height: 10px;
  }
  
  .quote {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  .author {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
  
  .projects {
    font-size: 0.9rem;
    line-height: 1.4;
    max-width: 100%;
  }
}
  /* Enlarged testimonial fonts and full-width text */
  .quote {
    font-size: 1.5rem;
    max-width: 100%;
  }

  .author {
    font-size: 1.3rem;
  }

  .projects {
    font-size: 1.1rem;
    max-width: 100%;
  }
</style>

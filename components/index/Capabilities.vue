<template>
  <div class="capabilities-section">
    <!-- Capabilities Section First -->
    <CapabilitiesSection />
    
    <!-- Testimonials Section Second -->
    <TestimonialsSection />
  </div>
</template>
      <div class="testimonial-content" id="testimonial-1">
        <p class="quote">Jessica has a strong creative approach towards everything she does. This personality trait combined with her profund understanding of her clients business objectives turned her into a natural strategist and therefore the right person to create remarkable concepts for brands that are determined to offer meaningful and unique experiences.<br>She delivers great results with kindness, joy, special artistic skills and sharp intuition.<br>Look out for this one!</p>
        <p class="author">Lais Hauschild Cobra · 1st degree connection</p>
        <p class="projects">Estratégia, Branding, Consultora independente<br>July 17, 2014, Lais Hauschild worked with Jessica but they were at different companies</p>
      </div>
      <div class="testimonial-content" id="testimonial-2" style="display: none;">
        <p class="quote">Jessica has a natural talent for leadership and for exposing ideas and projects to different audiences. With a keen eye to the customer and user, she proposes creative and personalized solutions, always allied to implementation and schedule.</p>
        <p class="author">Cristina Opsvik · 1st degree connection</p>
        <p class="projects">specialist in design and management | design strategist | brand architecture | architecture | service and product design and management | design strategist<br>November 15, 2019, Cristina reported directly to Jessica</p>
      </div>
      <div class="testimonial-content" id="testimonial-3" style="display: none;">
        <p class="quote">Jessica is an excellent professional and one of the best managers I've ever had. She is passionate about her job, focused, organized and knows how to use her strengths to deliver awesome projects and create great spaces for customers. Her creativity is powerful and contagious!</p>
        <p class="author">Fernanda Belizario Santos Felizola · 1st degree connection</p>
        <p class="projects">Head de Arquitetura na Livelo<br>November 25, 2019, Jessica reported directly to Santos</p>
      </div>
      <div class="testimonial-content" id="testimonial-4" style="display: none;">
        <p class="quote">I worked with Jessica in a great project in the field of hospitality that we are developing in São Paulo, Brazil.<br>Regarding her professional skills, her professionalism, her high levels of commitment and her ability to lead and manage the team she is involved with. Jessica is a very organized person as well as a great creative. She has natural entrepreneurship and it's very pleasant to work with her as a team partner.<br>Jessica's problem solver with deep knowledge, successful track record and she's a very professional project manager.<br>I also want to highlight her personal skills as a human being. Always very kind and with a positive approach.<br>I would definitely recommend her for any job!</p>
        <p class="author">Inês Duque Dias · 1st degree connection</p>
        <p class="projects">Head of Communication & New Business - Atelier Nini Andrade Silva | Negotiation | Skilled in Communication | Creative Fields and Copywriter | Passionate by Photography | Storytelling<br>All LinkedIn members/Show Inês Duque Dias recommendation to All LinkedIn members</p>
      </div>
      <div class="testimonial-content" id="testimonial-5" style="display: none;">
        <p class="quote">Jessica is a very talented designer with a great eye for detail and a strong understanding of the hospitality industry. She has a great ability to understand the needs of the client and translate them into beautiful and functional designs. She is also a great team player and a pleasure to work with.</p>
        <p class="author">Rachel Ratterman · 1st degree connection</p>
        <p class="projects">Principal at Fork Design Studio<br>August 13, 2020, Rachel managed Jessica directly<br>Jessica was a great colleague to work with. She managed design projects in the hospitality realm at IHG where she was a joy to work with, not only because of her positive attitude, but also because of her exceptional design sensibility and the passion she brings to all aspects of her work.</p>
      </div>
      <div class="testimonial-content" id="testimonial-6" style="display: none;">
        <p class="quote">Jessica is a very talented designer with a great eye for detail and a strong understanding of the hospitality industry. She has a great ability to understand the needs of the client and translate them into beautiful and functional designs. She is also a great team player and a pleasure to work with.</p>
        <p class="author">Another Reviewer</p>
        <p class="projects">Position at Company<br>Date, Relationship</p>
      </div>
      <div class="scroll-arrow right-arrow">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 6H23.5" stroke="#E9EFC9" stroke-width="1" />
          <path d="M18 1L23 6L18 11" stroke="#E9EFC9" stroke-width="1" />
        </svg>
  </div>
</template>

<script>
import CapabilitiesSection from './CapabilitiesSection.vue';
import TestimonialsSection from './TestimonialsSection.vue';
import { useTranslation } from '~/composables/useTranslation';

export default {
  name: 'Capabilities',
  components: {
    CapabilitiesSection,
    TestimonialsSection
  },
  setup() {
    const { currentLanguage, translations, t } = useTranslation();
    
    return {
      t,
      currentLanguage
    };
  },
  data() {
    return {}
  },
  mounted() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    if (leftArrow) {
      leftArrow.addEventListener('click', this.showPreviousTestimonial);
    }
    
    if (rightArrow) {
      rightArrow.addEventListener('click', this.showNextTestimonial);
    }
  },
  beforeDestroy() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    if (leftArrow) {
      leftArrow.removeEventListener('click', this.showPreviousTestimonial);
    }
    
    if (rightArrow) {
      rightArrow.removeEventListener('click', this.showNextTestimonial);
    }
  },
  methods: {
    showTestimonial(index) {
      const selectedTestimonial = document.getElementById(`testimonial-${index}`);
      if (selectedTestimonial) {
        selectedTestimonial.style.display = 'flex';
        
        // Trigger reflow to ensure animation works
        void selectedTestimonial.offsetWidth;
        
        // Add active class to trigger animation
        setTimeout(() => {
          selectedTestimonial.classList.add('active');
        }, 10);
      }
    },
    showNextTestimonial() {
      let nextIndex = 1;
      this.showTestimonial(nextIndex);
    },
    showPreviousTestimonial() {
      let prevIndex = 1;
      this.showTestimonial(prevIndex);
    }
  }
}
</script>

<style scoped>
.capabilities-section {
  flex-direction: column;
  /* Removed background-color to allow underlying image to show through */
  padding-bottom: 4rem;
}

@media (max-width: 768px) {
  .capabilities-section {
    padding-bottom: 2rem;
  }
}
</style>

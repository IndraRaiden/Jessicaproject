<template>
  <footer class="footer">
    <div class="footer-columns">
      <div class="footer-column">
        <h3><a href="/about">{{ t('footerAboutTitle') }}</a></h3>
        <ul>
          <li><a href="/about">{{ t('footerAboutMeetFounder') }}</a></li>
          <li><a href="/about">{{ t('footerAboutWorkWithUs') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/services">{{ t('footerServicesTitle') }}</a></h3>
        <ul>
          <li><a href="/services">{{ t('footerServicesDesign') }}</a></li>
          <li><a href="/services">{{ t('footerServicesStrategy') }}</a></li>
          <li><a href="/services">{{ t('footerServicesConsulting') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/hotels">{{ t('footerProjectsTitle') }}</a></h3>
        <ul>
          <li><a href="/hotels">{{ t('footerProjectsHotels') }}</a></li>
          <li><a href="/foodnbeverage" v-html="footerFnb"></a></li>
          <li><a href="/santuaries-and-cultural">{{ t('footerProjectsSanctuaries') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>
          <a href="#" @click.prevent="showContact = true">{{ t('footerContactTitle') }}</a>
        </h3>
        <a href="mailto:info@weareoara.com" class="email">info@weareoara.com</a>
        <div class="contact-info">
          <p class="contact-line"><span class="city">NEW YORK</span><span class="phone">+1 646 651 7126</span></p>
          <p class="contact-line"><span class="city">SÃO PAULO</span><span class="phone">+55 11 xxxxx xxxx</span></p>
        </div>
      </div>
    </div>
  </footer>
  <ContactUs :show="showContact" @close="showContact = false" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTranslation } from '~/composables/useTranslation';
import ContactUs from '~/components/modals/ContactUs.vue';

const { t } = useTranslation();
const showContact = ref(false);

// Convert "FOOD & BEVERAGE" to "Food & Beverage" only for footer display
const footerFnb = computed(() => {
  const original = t('footerProjectsFNB');
  return original
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 60px 80px;
  background-color: #ffffff;
  font-family: 'Be Vietnam Pro', sans-serif;
  position: relative;
  z-index: 10;
  margin-top: 0;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  padding: 0 15px;
}

.footer-column h3 {
  font-size: 1.44rem; /* 40% bigger */
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.22em; /* ≈ 220 spacing */
}

.footer-column h3 a {
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
}

/* Underline animation */
.footer-column h3 a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.footer-column h3 a:hover::after {
  transform: scaleX(1);
}

.footer-column h3 a:hover {
  color: #666;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column a {
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #666;
}

.email {
  display: block;
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
}

.contact-info p {
  margin: 5px 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: #000;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px;
  }
  
  .footer-columns {
    flex-direction: column;
  }
  
  .footer-column {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .footer-column:last-child {
    margin-bottom: 0;
  }
}
.contact-line {
  display: flex;
  gap: 10px;
}

.city {
  width: 110px; /* ensures alignment */
  text-align: left;
}

.phone {
  white-space: nowrap;
}
</style>

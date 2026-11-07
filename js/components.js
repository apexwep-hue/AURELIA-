/* ==========================================================================
   DYNAMIC COMPONENT RENDERER SYSTEM
   ========================================================================== */

const Components = {
  // Injects configuration values into static HTML DOM elements
  applySiteConfig() {
    // Inject text values
    document.getElementById('config-brand-name').textContent = SITE_CONFIG.brandName;
    document.getElementById('config-job-title').textContent = SITE_CONFIG.jobTitle;
    document.getElementById('config-hero-tagline').textContent = SITE_CONFIG.hero.tagline;
    document.getElementById('config-hero-title').textContent = SITE_CONFIG.hero.title;
    document.getElementById('config-hero-desc').textContent = SITE_CONFIG.hero.description;
    
    // Inject images
    document.getElementById('hero-main-img').src = SITE_CONFIG.hero.mainImage;
    document.getElementById('config-artist-img').src = SITE_CONFIG.about.artistImage;
    document.getElementById('config-stat-exp').textContent = SITE_CONFIG.about.yearsExperience;
    document.getElementById('config-about-heading').textContent = SITE_CONFIG.about.heading;
    
    // Contact information
    document.getElementById('config-contact-address').textContent = SITE_CONFIG.contact.address;
    document.getElementById('config-contact-email').textContent = SITE_CONFIG.contact.email;
    document.getElementById('config-contact-email').href = `mailto:${SITE_CONFIG.contact.email}`;
    document.getElementById('config-contact-phone').textContent = SITE_CONFIG.contact.phone;
    document.getElementById('config-contact-phone').href = `tel:${SITE_CONFIG.contact.phone}`;
    document.getElementById('config-contact-hours').textContent = SITE_CONFIG.contact.hours;
    
    // WhatsApp Links
    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent("Hello Aurelia Vance Studio, I am interested in inquiring about an artwork or commission.")}`;
    document.getElementById('config-whatsapp-btn').href = waUrl;
  },

  // Renders About Stats
  renderStats() {
    const container = document.getElementById('stats-grid-container');
    if (!container) return;
    container.innerHTML = SITE_CONFIG.about.stats.map(s => `
      <div class="stat-item">
        <span class="stat-item-val">${s.value}</span>
        <span class="stat-item-lbl">${s.label}</span>
      </div>
    `).join('');
  },

  // Renders Masonry Gallery Cards
  renderGallery(filter = 'all') {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const items = filter === 'all' 
      ? SITE_CONFIG.artworks 
      : SITE_CONFIG.artworks.filter(a => a.category === filter);

    grid.innerHTML = items.map(art => `
      <div class="gallery-card reveal-up" data-id="${art.id}">
        <img src="${art.image}" alt="${art.title}" loading="lazy">
        <div class="gallery-card-overlay">
          <span class="card-meta">${art.medium} — ${art.year}</span>
          <h3 class="card-title">${art.title}</h3>
          <span class="card-specs">${art.dimensions} | ${art.status}</span>
        </div>
      </div>
    `).join('');

    // Attach click listener for Artwork Detail Modal
    grid.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        this.openArtworkModal(id);
      });
    });
  },

  // Renders Exhibitions Timeline
  renderExhibitions() {
    const container = document.getElementById('exhibitions-timeline');
    if (!container) return;
    container.innerHTML = SITE_CONFIG.exhibitions.map(e => `
      <div class="timeline-item">
        <span class="timeline-year">${e.year}</span>
        <h3 class="timeline-title">${e.title}</h3>
        <p class="timeline-venue">${e.venue}</p>
      </div>
    `).join('');
  },

  // Renders Awards List
  renderAwards() {
    const container = document.getElementById('awards-list-container');
    if (!container) return;
    container.innerHTML = SITE_CONFIG.awards.map(a => `
      <div class="award-item glass-panel">
        <span class="timeline-year">${a.year}</span>
        <h3 class="award-title">${a.title}</h3>
        <p class="award-org">${a.org}</p>
      </div>
    `).join('');
  },

  // Renders Testimonials
  renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    container.innerHTML = SITE_CONFIG.testimonials.map(t => `
      <div class="testimonial-card glass-panel" style="padding: 30px; margin-bottom: 20px;">
        <p class="quote-text" style="font-family: var(--font-serif); font-size: 1.3rem; font-style: italic; margin-bottom: 16px;">"${t.quote}"</p>
        <span class="author-name" style="color: var(--color-accent-gold); font-weight: 600;">${t.author}</span>
        <span class="author-loc" style="font-size: 0.8rem; color: var(--color-text-muted); font-style: normal;"> — ${t.location}</span>
      </div>
    `).join('');
  },

  // Artwork Detail Modal Controller
  openArtworkModal(artId) {
    const art = SITE_CONFIG.artworks.find(a => a.id === artId);
    if (!art) return;

    document.getElementById('modal-artwork-img').src = art.image;
    document.getElementById('modal-artwork-cat').textContent = art.category;
    document.getElementById('modal-artwork-title').textContent = art.title;
    document.getElementById('modal-artwork-price').textContent = art.price;
    document.getElementById('modal-artwork-year').textContent = art.year;
    document.getElementById('modal-artwork-medium').textContent = art.medium;
    document.getElementById('modal-artwork-dims').textContent = art.dimensions;
    document.getElementById('modal-artwork-status').textContent = art.status;
    document.getElementById('modal-artwork-desc').textContent = art.description;

    const waMsg = `Hello Aurelia Vance Studio, I am interested in acquiring "${art.title}" (${art.price}). Is it available for viewing?`;
    document.getElementById('modal-whatsapp-btn').href = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(waMsg)}`;

    const modal = document.getElementById('artwork-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }
};
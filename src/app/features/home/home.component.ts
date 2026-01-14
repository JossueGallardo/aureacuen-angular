import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- ========================= -->
    <!-- HERO SECTION - DISEÑO ÚNICO -->
    <!-- ========================= -->
    <section class="hero-aureacuen">
      <div class="hero-content">
        <div class="container">
          <div class="row align-items-center min-vh-85">
            <div class="col-lg-7">
              <span class="hero-badge">
                <i class="bi bi-award me-2"></i>Hotel Premium
              </span>
              <h1 class="hero-title">
                Bienvenido a <br>
                <span class="text-gradient">AureaCuen</span>
              </h1>
              <p class="hero-subtitle">
                Hospitalidad Ecuatoriana en el Corazón del Azuay
              </p>
              <p class="hero-description">
                Descubre la magia de Cuenca desde nuestro hotel boutique. 
                Donde la tradición andina se fusiona con el confort moderno.
              </p>
              
              <!-- Stats -->
              <div class="hero-stats">
                <div class="stat-item">
                  <span class="stat-number">4.9</span>
                  <span class="stat-label"><i class="bi bi-star-fill text-warning"></i> Rating</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">500+</span>
                  <span class="stat-label">Huéspedes Felices</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">24/7</span>
                  <span class="stat-label">Atención</span>
                </div>
              </div>

              <div class="hero-buttons">
                <a routerLink="/habitaciones" class="btn-aureacuen-primary">
                  <i class="bi bi-calendar-check me-2"></i>Reservar Ahora
                </a>
                @if (!isLoggedIn) {
                  <a routerLink="/register" class="btn-aureacuen-outline">
                    <i class="bi bi-person-plus me-2"></i>Registrarse
                  </a>
                }
              </div>
            </div>
            <div class="col-lg-5 d-none d-lg-block">
              <div class="hero-image-container">
                <div class="hero-image-main">
                  <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80" alt="Suite AureaCuen">
                </div>
                <div class="hero-image-float">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80" alt="Terraza">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- BARRA DE GARANTÍAS -->
    <!-- ========================= -->
    <section class="guarantees-bar">
      <div class="container">
        <div class="row text-center">
          <div class="col-6 col-md-3">
            <div class="guarantee-item">
              <i class="bi bi-shield-check"></i>
              <span>Reserva Segura</span>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="guarantee-item">
              <i class="bi bi-tag"></i>
              <span>Mejor Precio</span>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="guarantee-item">
              <i class="bi bi-headset"></i>
              <span>Soporte 24/7</span>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="guarantee-item">
              <i class="bi bi-x-circle"></i>
              <span>Cancelación Flexible</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- QUIÉNES SOMOS -->
    <!-- ========================= -->
    <section class="about-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-images">
              <div class="about-img-main">
                <img src="https://www.shutterstock.com/shutterstock/photos/2503467517/display_1500/stock-photo-cathedral-of-the-immaculate-conception-of-cuenca-also-called-cuenca-cathedral-or-new-cathedral-2503467517.jpg" 
                     alt="Catedral de Cuenca">
              </div>
              <div class="about-img-overlay">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80" 
                     alt="Interior Hotel">
              </div>
              <div class="about-experience-badge">
                <span class="exp-number">15+</span>
                <span class="exp-text">Años de<br>Experiencia</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <span class="section-overline">QUIÉNES SOMOS</span>
              <h2 class="section-title">La Experiencia<br><span class="text-gradient">AureaCuen</span></h2>
              <p class="about-lead">
                En el corazón de <strong>Cuenca, Patrimonio Cultural de la Humanidad</strong>, 
                AureaCuen combina la elegancia colonial con la calidez de la hospitalidad ecuatoriana.
              </p>
              <p>
                A pasos del Centro Histórico y las mejores atracciones de la ciudad, 
                vive una experiencia única donde la tradición andina se encuentra con el lujo contemporáneo.
              </p>
              <div class="about-features">
                <div class="about-feature">
                  <div class="feature-icon-circle">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div class="feature-text">
                    <h5>Ubicación Privilegiada</h5>
                    <p>A pasos de la Catedral y el Río Tomebamba</p>
                  </div>
                </div>
                <div class="about-feature">
                  <div class="feature-icon-circle">
                    <i class="bi bi-building"></i>
                  </div>
                  <div class="feature-text">
                    <h5>Elegancia Colonial</h5>
                    <p>Arquitectura tradicional cuencana restaurada</p>
                  </div>
                </div>
                <div class="about-feature">
                  <div class="feature-icon-circle">
                    <i class="bi bi-heart"></i>
                  </div>
                  <div class="feature-text">
                    <h5>Hospitalidad Andina</h5>
                    <p>Servicio personalizado y cálido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- SERVICIOS PREMIUM -->
    <!-- ========================= -->
    <section class="services-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-overline">COMODIDADES</span>
          <h2 class="section-title">Servicios <span class="text-gradient">Premium</span></h2>
          <p class="section-subtitle">Todo lo que necesitas para una estadía excepcional</p>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-wifi"></i>
              </div>
              <h5>WiFi Alta Velocidad</h5>
              <p>Conexión gratuita de alta velocidad en todas las áreas del hotel</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-cup-hot"></i>
              </div>
              <h5>Desayuno Típico</h5>
              <p>Sabores tradicionales ecuatorianos con café de Loja</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-map"></i>
              </div>
              <h5>Tours Guiados</h5>
              <p>Excursiones al Cajas, Ingapirca y mercados artesanales</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <h5>Seguridad 24/7</h5>
              <p>Equipo de seguridad disponible las 24 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- EXPLORA CUENCA -->
    <!-- ========================= -->
    <section class="explore-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-overline">DESCUBRE</span>
          <h2 class="section-title">Explora <span class="text-gradient">Cuenca</span></h2>
          <p class="section-subtitle">Patrimonio Cultural de la Humanidad con infinitas maravillas</p>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="explore-card">
              <div class="explore-image">
                <img src="https://www.shutterstock.com/shutterstock/photos/2503467517/display_1500/stock-photo-cathedral-of-the-immaculate-conception-of-cuenca-also-called-cuenca-cathedral-or-new-cathedral-2503467517.jpg" 
                     alt="Centro Histórico">
                <div class="explore-overlay"></div>
              </div>
              <div class="explore-content">
                <div class="explore-icon">
                  <i class="bi bi-building"></i>
                </div>
                <h5>Centro Histórico</h5>
                <p>Calles empedradas y arquitectura colonial</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="explore-card">
              <div class="explore-image">
                <img src="https://www.shutterstock.com/shutterstock/photos/2300052001/display_1500/stock-photo-landscape-in-cajas-national-park-near-cuenca-ecuador-mountains-lakes-and-forest-in-ecuadorian-2300052001.jpg" 
                     alt="Parque Nacional Cajas">
                <div class="explore-overlay"></div>
              </div>
              <div class="explore-content">
                <div class="explore-icon">
                  <i class="bi bi-tree"></i>
                </div>
                <h5>Parque Nacional Cajas</h5>
                <p>Lagunas de páramo a 30 minutos</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="explore-card">
              <div class="explore-image">
                <img src="https://www.shutterstock.com/shutterstock/photos/636641344/display_1500/stock-photo-old-lady-selling-handmade-wicker-boxes-cuenca-ecuador-636641344.jpg" 
                     alt="Artesanías">
                <div class="explore-overlay"></div>
              </div>
              <div class="explore-content">
                <div class="explore-icon">
                  <i class="bi bi-shop"></i>
                </div>
                <h5>Sombreros de Paja Toquilla</h5>
                <p>Artesanía Patrimonio de la Humanidad</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="explore-card">
              <div class="explore-image">
                <img src="https://www.shutterstock.com/shutterstock/photos/2367694655/display_1500/stock-photo-the-tomebamba-mountain-river-crosses-the-city-cuenca-ecuador-2367694655.jpg" 
                     alt="Río Tomebamba">
                <div class="explore-overlay"></div>
              </div>
              <div class="explore-content">
                <div class="explore-icon">
                  <i class="bi bi-water"></i>
                </div>
                <h5>Río Tomebamba</h5>
                <p>El pintoresco barranco histórico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- TESTIMONIOS -->
    <!-- ========================= -->
    <section class="testimonials-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-overline-light">OPINIONES</span>
          <h2 class="section-title text-white">Lo Que Dicen <span class="text-aureacuen-light">Nuestros Huéspedes</span></h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-text">
                "Una experiencia increíble. El hotel tiene ese encanto colonial que hace especial a Cuenca. 
                El desayuno con café de Loja fue espectacular."
              </p>
              <div class="testimonial-author">
                <div class="author-avatar">MC</div>
                <div class="author-info">
                  <h6>María Carpio</h6>
                  <span>Quito, Ecuador</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="testimonial-card featured">
              <div class="testimonial-stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-text">
                "Ubicación perfecta para explorar el centro histórico. El personal fue muy amable 
                y nos ayudó a organizar el tour al Cajas. ¡Volveremos!"
              </p>
              <div class="testimonial-author">
                <div class="author-avatar">JV</div>
                <div class="author-info">
                  <h6>Juan Vintimilla</h6>
                  <span>Guayaquil, Ecuador</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-text">
                "Las vistas al río Tomebamba son impresionantes. La suite signature superó 
                todas mis expectativas. El mejor hotel boutique de Cuenca."
              </p>
              <div class="testimonial-author">
                <div class="author-avatar">AS</div>
                <div class="author-info">
                  <h6>Ana Sánchez</h6>
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- CALL TO ACTION -->
    <!-- ========================= -->
    <section class="cta-section">
      <div class="container text-center">
        <h2>¿Listo para Descubrir Cuenca?</h2>
        <p>Reserva ahora y vive la experiencia AureaCuen</p>
        <a routerLink="/habitaciones" class="btn-aureacuen-cta">
          <i class="bi bi-calendar-check me-2"></i>Hacer Reservación
        </a>
      </div>
    </section>
  `,
  styles: [`
    /* ==================== VARIABLES LOCALES ==================== */
    :host {
      --green-primary: #2f5d50;
      --green-dark: #0d1f1a;
      --green-light: #436e62;
      --green-lighter: #5a8f7f;
      --green-accent: #7db3a4;
      --gold: #c9a227;
    }

    /* ==================== HERO SECTION ==================== */
    .hero-aureacuen {
      min-height: 100vh;
      background: linear-gradient(135deg, #0d1f1a 0%, #2f5d50 100%);
      position: relative;
      overflow: hidden;
    }

    .hero-aureacuen::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80') center/cover;
      opacity: 0.15;
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
    }

    .min-vh-85 {
      min-height: 85vh;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      color: white;
      padding: 0.5rem 1.25rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .hero-title {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 4rem;
      font-weight: 700;
      color: white;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    .text-gradient {
      background: linear-gradient(135deg, #7db3a4 0%, #c9a227 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--green-accent);
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .hero-description {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
      max-width: 500px;
      margin-bottom: 2rem;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: white;
      font-family: 'Josefin Sans', sans-serif;
    }

    .stat-label {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.6);
    }

    .stat-divider {
      width: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-aureacuen-primary {
      display: inline-flex;
      align-items: center;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, var(--gold) 0%, #d4b13f 100%);
      color: #0d1f1a;
      font-weight: 600;
      border-radius: 50px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 8px 24px rgba(201, 162, 39, 0.4);
    }

    .btn-aureacuen-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(201, 162, 39, 0.5);
      color: #0d1f1a;
    }

    .btn-aureacuen-outline {
      display: inline-flex;
      align-items: center;
      padding: 1rem 2rem;
      background: transparent;
      color: white;
      font-weight: 600;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50px;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-aureacuen-outline:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      color: white;
    }

    /* Hero Images */
    .hero-image-container {
      position: relative;
      padding: 2rem;
    }

    .hero-image-main img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    }

    .hero-image-float {
      position: absolute;
      bottom: 0;
      left: 0;
      animation: float 6s ease-in-out infinite;
    }

    .hero-image-float img {
      width: 180px;
      height: 140px;
      object-fit: cover;
      border-radius: 15px;
      border: 4px solid white;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    /* ==================== GUARANTEES BAR ==================== */
    .guarantees-bar {
      background: var(--green-primary);
      padding: 1.25rem 0;
    }

    .guarantee-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: white;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .guarantee-item i {
      font-size: 1.25rem;
      opacity: 0.8;
    }

    /* ==================== ABOUT SECTION ==================== */
    .about-section {
      padding: 100px 0;
      background: #f8faf9;
    }

    .about-images {
      position: relative;
      padding: 2rem;
    }

    .about-img-main img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(47, 93, 80, 0.2);
    }

    .about-img-overlay {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .about-img-overlay img {
      width: 200px;
      height: 160px;
      object-fit: cover;
      border-radius: 15px;
      border: 5px solid white;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }

    .about-experience-badge {
      position: absolute;
      top: 0;
      right: 3rem;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(47, 93, 80, 0.4);
    }

    .exp-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      font-family: 'Josefin Sans', sans-serif;
    }

    .exp-text {
      font-size: 0.8rem;
      opacity: 0.9;
    }

    .section-overline {
      display: inline-block;
      color: var(--green-primary);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .section-overline-light {
      display: inline-block;
      color: var(--green-accent);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .section-title {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 2.75rem;
      font-weight: 700;
      color: var(--green-dark);
      margin-bottom: 1.5rem;
    }

    .section-subtitle {
      color: #6b7c79;
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .about-content {
      padding-left: 2rem;
    }

    .about-lead {
      font-size: 1.15rem;
      color: #40524d;
      margin-bottom: 1rem;
    }

    .about-features {
      margin-top: 2rem;
    }

    .about-feature {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .feature-icon-circle {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .feature-icon-circle i {
      color: white;
      font-size: 1.25rem;
    }

    .feature-text h5 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--green-dark);
      margin-bottom: 0.25rem;
    }

    .feature-text p {
      font-size: 0.9rem;
      color: #6b7c79;
      margin: 0;
    }

    /* ==================== SERVICES SECTION ==================== */
    .services-section {
      padding: 100px 0;
      background: white;
    }

    .service-card {
      background: #f8faf9;
      padding: 2.5rem 2rem;
      border-radius: 20px;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      height: 100%;
      border: 1px solid rgba(47, 93, 80, 0.08);
    }

    .service-card:hover {
      transform: translateY(-15px);
      background: white;
      box-shadow: 0 25px 60px rgba(47, 93, 80, 0.15);
    }

    .service-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      transition: all 0.4s ease;
    }

    .service-icon i {
      font-size: 2rem;
      color: white;
    }

    .service-card:hover .service-icon {
      background: linear-gradient(135deg, var(--gold) 0%, #d4b13f 100%);
      transform: scale(1.1) rotate(10deg);
    }

    .service-card h5 {
      font-weight: 600;
      color: var(--green-dark);
      margin-bottom: 0.75rem;
    }

    .service-card p {
      color: #6b7c79;
      font-size: 0.9rem;
      margin: 0;
    }

    /* ==================== EXPLORE SECTION ==================== */
    .explore-section {
      padding: 100px 0;
      background: #f8faf9;
    }

    .explore-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 5px 20px rgba(47, 93, 80, 0.08);
    }

    .explore-card:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 30px 60px rgba(47, 93, 80, 0.2);
    }

    .explore-image {
      position: relative;
      height: 180px;
      overflow: hidden;
    }

    .explore-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .explore-card:hover .explore-image img {
      transform: scale(1.15);
    }

    .explore-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(47, 93, 80, 0.4) 100%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .explore-card:hover .explore-overlay {
      opacity: 1;
    }

    .explore-content {
      padding: 1.5rem;
      text-align: center;
    }

    .explore-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -44px auto 1rem;
      position: relative;
      z-index: 2;
      box-shadow: 0 8px 20px rgba(47, 93, 80, 0.3);
      transition: all 0.4s ease;
    }

    .explore-icon i {
      color: white;
      font-size: 1.4rem;
    }

    .explore-card:hover .explore-icon {
      background: linear-gradient(135deg, var(--gold) 0%, #d4b13f 100%);
      transform: scale(1.15) rotate(10deg);
    }

    .explore-content h5 {
      font-weight: 600;
      color: var(--green-dark);
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .explore-card:hover .explore-content h5 {
      color: var(--gold);
    }

    .explore-content p {
      font-size: 0.85rem;
      color: #6b7c79;
      margin: 0;
    }

    /* ==================== TESTIMONIALS SECTION ==================== */
    .testimonials-section {
      padding: 100px 0;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-dark) 100%);
    }

    .text-aureacuen-light {
      color: var(--green-accent);
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      height: 100%;
      transition: all 0.3s ease;
    }

    .testimonial-card.featured {
      transform: scale(1.05);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    }

    .testimonial-card:hover {
      transform: translateY(-10px);
    }

    .testimonial-card.featured:hover {
      transform: scale(1.05) translateY(-10px);
    }

    .testimonial-stars {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .testimonial-stars i {
      color: #f59e0b;
    }

    .testimonial-text {
      color: #40524d;
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
    }

    .author-info h6 {
      font-weight: 600;
      color: var(--green-dark);
      margin: 0;
    }

    .author-info span {
      font-size: 0.85rem;
      color: #6b7c79;
    }

    /* ==================== CTA SECTION ==================== */
    .cta-section {
      padding: 80px 0;
      background: #f8faf9;
    }

    .cta-section h2 {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--green-dark);
      margin-bottom: 0.75rem;
    }

    .cta-section p {
      color: #6b7c79;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }

    .btn-aureacuen-cta {
      display: inline-flex;
      align-items: center;
      padding: 1.25rem 2.5rem;
      background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-light) 100%);
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      border-radius: 50px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 8px 24px rgba(47, 93, 80, 0.4);
    }

    .btn-aureacuen-cta:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(47, 93, 80, 0.5);
      color: white;
    }

    /* ==================== RESPONSIVE ==================== */
    @media (max-width: 991px) {
      .hero-title {
        font-size: 2.75rem;
      }

      .hero-stats {
        gap: 1.5rem;
      }

      .about-content {
        padding-left: 0;
        margin-top: 3rem;
      }

      .section-title {
        font-size: 2.25rem;
      }
    }

    @media (max-width: 767px) {
      .hero-title {
        font-size: 2.25rem;
      }

      .hero-stats {
        gap: 1rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }

      .testimonial-card.featured {
        transform: none;
      }
    }
  `]
})
export class HomeComponent {
  private authService = inject(AuthService);

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

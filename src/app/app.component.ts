import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BreadcrumbsComponent],
  template: `
    <app-navbar></app-navbar>
    <app-breadcrumbs></app-breadcrumbs>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="footer-aureacuen">
      <div class="footer-top">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6">
              <div class="footer-about">
                <h4 class="footer-title">
                  <i class="bi bi-building me-2"></i>
                  AureaCuen
                </h4>
                <p class="footer-description">
                  Experiencia de hospedaje premium en el corazón de Cuenca, Ecuador. 
                  Disfruta del lujo y la comodidad en nuestra ubicación privilegiada.
                </p>
                <div class="social-links d-flex gap-2 mt-3">
                  <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-twitter-x"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6">
              <h4 class="footer-title">Enlaces</h4>
              <ul class="footer-links">
                <li><a routerLink="/">Inicio</a></li>
                <li><a routerLink="/habitaciones">Habitaciones</a></li>
                <li><a routerLink="/login">Iniciar Sesión</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-3 col-6">
              <h4 class="footer-title">Servicios</h4>
              <ul class="footer-links">
                <li><a href="#">WiFi Gratuito</a></li>
                <li><a href="#">Restaurante</a></li>
                <li><a href="#">Spa</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h4 class="footer-title">Contacto</h4>
              <ul class="footer-contact">
                <li><i class="bi bi-geo-alt me-2"></i> Centro Histórico, Cuenca, Ecuador</li>
                <li><i class="bi bi-telephone me-2"></i> +593 7 123 4567</li>
                <li><i class="bi bi-envelope me-2"></i> info&#64;aureacuen.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="mb-0">© 2026 AureaCuen. Todos los derechos reservados.</p>
            </div>
            <div class="col-md-6 text-md-end">
              <p class="mb-0">Desarrollado con <i class="bi bi-heart-fill text-danger"></i> por Jossue Gallardo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
    }

    .footer-aureacuen {
      background-color: #2f5d50;
      color: #ffffff;
      font-size: 14px;
    }

    .footer-top {
      padding: 60px 0 40px;
    }

    .footer-title {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 18px;
      font-weight: 600;
      position: relative;
      padding-bottom: 12px;
      margin-bottom: 20px;
      color: #ffffff;
      letter-spacing: 0.5px;
    }

    .footer-title::after {
      content: "";
      position: absolute;
      display: block;
      width: 30px;
      height: 3px;
      background: rgba(255, 255, 255, 0.5);
      bottom: 0;
      left: 0;
      border-radius: 2px;
    }

    .footer-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 10px;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .footer-links a:hover {
      color: #ffffff;
      padding-left: 5px;
    }

    .footer-contact {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-contact li {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      transform: translateY(-3px);
    }

    .footer-bottom {
      background-color: rgba(0, 0, 0, 0.2);
      padding: 20px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
    }
  `]
})
export class AppComponent {
  title = 'AureaCuen';
}

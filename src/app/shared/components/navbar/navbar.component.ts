import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg cabezal_general shadow-sm sticky-top">
      <div class="container menu_cabezal_general">
        <a class="navbar-brand logo_cabezal_general fw-bold" routerLink="/">
          AureaCuen
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto">
            <!-- Links públicos -->
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/habitaciones" routerLinkActive="active">
                Habitaciones
              </a>
            </li>

            @if (authService.isLoggedIn()) {
              <!-- Links de usuario autenticado -->
              <li class="nav-item">
                <a class="nav-link" routerLink="/usuario/reservas" routerLinkActive="active">
                  Mis reservas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/usuario/pagos" routerLinkActive="active">
                  Pagos
                </a>
              </li>

              @if (authService.isAdmin()) {
                <!-- Link de admin -->
                <li class="nav-item">
                  <a class="nav-link" routerLink="/admin" routerLinkActive="active">
                    Panel Administrador
                  </a>
                </li>
              }

              <!-- Dropdown de usuario -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle fw-semibold d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <span class="usuario-avatar me-2">
                    <i class="bi bi-person-circle"></i>
                  </span>
                  {{ user?.nombre || 'Mi Cuenta' }}
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 dropdown-aureacuen">
                  <li class="dropdown-header px-3 py-2">
                    <small class="text-muted">Mi Cuenta</small>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex align-items-center py-2" routerLink="/usuario/perfil">
                      <i class="bi bi-person me-2 text-success"></i>
                      <span>Mi perfil</span>
                    </a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item d-flex align-items-center py-2 text-danger" href="#" (click)="logout($event)">
                      <i class="bi bi-box-arrow-right me-2"></i>
                      <span>Cerrar sesión</span>
                    </a>
                  </li>
                </ul>
              </li>
            } @else {
              <!-- Botón de login para usuarios no autenticados -->
              <li class="nav-item">
                <a class="btn btn-primary ms-lg-3" routerLink="/login">
                  Iniciar sesión
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    /* ==================== NAVBAR CABEZAL AUREACUEN ==================== */
    .cabezal_general {
      background-color: #436e62 !important;
      border-bottom: none !important;
      box-shadow: 0px 0 18px rgba(0, 0, 0, 0.1);
    }

    .menu_cabezal_general {
      padding: 0.75rem 0;
    }

    .logo_cabezal_general {
      font-size: 30px !important;
      font-weight: 700 !important;
      font-family: 'Josefin Sans', sans-serif !important;
      color: #ffffff !important;
      letter-spacing: 1px;
      transition: transform 0.3s ease;
    }

    .logo_cabezal_general:hover {
      transform: scale(1.05);
      color: #ffffff !important;
    }

    /* ==================== NAV LINKS ==================== */
    .navbar-nav .nav-link {
      color: rgba(255, 255, 255, 0.85) !important;
      font-family: 'Poppins', sans-serif !important;
      font-weight: 500 !important;
      font-size: 15px !important;
      padding: 18px 15px !important;
      transition: 0.3s;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .navbar-nav .nav-link:hover,
    .navbar-nav .nav-link.active {
      color: #ffffff !important;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    /* ==================== BOTÓN PRIMARY ==================== */
    .navbar .btn-primary {
      background-color: #2f5d50 !important;
      border: 1px solid #2f5d50 !important;
      border-radius: 4px !important;
      padding: 0.875rem 2rem !important;
      font-weight: 600 !important;
      color: #ffffff !important;
      transition: all 0.3s ease !important;
    }

    .navbar .btn-primary:hover {
      background-color: #0d1f1a !important;
      border-color: #0d1f1a !important;
      transform: translateY(-1px);
    }

    /* ==================== DROPDOWN AUREACUEN ==================== */
    .dropdown-aureacuen {
      border-radius: 12px !important;
      padding: 8px 0 !important;
      min-width: 200px !important;
      background: #ffffff !important;
      border: 1px solid rgba(47, 93, 80, 0.1) !important;
      box-shadow: 0 10px 40px rgba(47, 93, 80, 0.15) !important;
      animation: dropdownFadeIn 0.25s ease-out;
    }

    @keyframes dropdownFadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .dropdown-aureacuen .dropdown-header {
      background: linear-gradient(135deg, rgba(47, 93, 80, 0.05) 0%, rgba(67, 110, 98, 0.03) 100%);
      border-bottom: 1px solid rgba(47, 93, 80, 0.08);
      font-weight: 600;
      color: #2f5d50 !important;
    }

    .dropdown-aureacuen .dropdown-item {
      color: #40524d !important;
      font-weight: 500;
      padding: 10px 16px !important;
      transition: all 0.2s ease;
      border-radius: 0;
      margin: 0 8px;
      border-radius: 8px;
    }

    .dropdown-aureacuen .dropdown-item:hover,
    .dropdown-aureacuen .dropdown-item:focus {
      background: linear-gradient(135deg, rgba(47, 93, 80, 0.08) 0%, rgba(67, 110, 98, 0.05) 100%) !important;
      color: #2f5d50 !important;
      transform: translateX(4px);
    }

    .dropdown-aureacuen .dropdown-item.text-danger {
      color: #dc3545 !important;
    }

    .dropdown-aureacuen .dropdown-item.text-danger:hover {
      background: rgba(220, 53, 69, 0.08) !important;
      color: #dc3545 !important;
    }

    .dropdown-aureacuen .dropdown-divider {
      border-color: rgba(47, 93, 80, 0.1);
      margin: 8px 16px;
    }

    .dropdown-aureacuen .dropdown-item i {
      width: 20px;
      font-size: 16px;
    }

    .text-success {
      color: #2f5d50 !important;
    }

    /* ==================== AVATAR ==================== */
    .usuario-avatar {
      font-size: 18px;
      opacity: 0.9;
    }

    /* ==================== NAVBAR TOGGLER MÓVIL ==================== */
    .navbar-toggler {
      border-color: rgba(255, 255, 255, 0.5) !important;
    }

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
    }

    /* ==================== RESPONSIVE ==================== */
    @media (max-width: 991px) {
      .logo_cabezal_general {
        font-size: 24px !important;
      }

      .navbar-nav .nav-link {
        padding: 12px 15px !important;
      }

      .navbar .btn-primary {
        margin-top: 10px;
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class NavbarComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  get user() {
    return this.authService.getCurrentUser();
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

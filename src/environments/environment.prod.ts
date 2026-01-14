export const environment = {
  production: true,

  // URLs directas a los microservicios en Render
  catalogosServiceUrl: 'https://catalogos-service.onrender.com/api',
  habitacionesServiceUrl: 'https://habitaciones-service.onrender.com',
  reservasServiceUrl: 'https://reservas-service.onrender.com',
  usuariosPagosServiceUrl: 'https://usuarios-pagos-service.onrender.com/api',

  // GraphQL endpoint para habitaciones
  habitacionesGraphqlUrl: 'https://habitaciones-service.onrender.com/graphql',

  // API del banco (mantenida)
  bankApiUrl: 'http://mibanca.runasp.net/api'
};

export const environment = {
  production: true,

  // API Gateway para autenticación JWT
  apiGatewayUrl: 'https://apigateway-hyaw.onrender.com/api',

  // URLs directas a los microservicios en Render
  catalogosServiceUrl: 'https://catalogos-service.onrender.com/api',
  habitacionesServiceUrl: 'https://habitaciones-service.onrender.com',
  reservasServiceUrl: 'https://reservas-service.onrender.com',
  usuariosPagosServiceUrl: 'https://usuarios-pagos-service.onrender.com/api',

  // GraphQL endpoint para habitaciones
  habitacionesGraphqlUrl: 'https://habitaciones-service.onrender.com/graphql',

  // API del banco - usando proxy CORS público (⚠️ TEMPORAL - NO SEGURO)
  // Proxy público que permite peticiones HTTP desde HTTPS
  bankApiUrl: 'https://corsproxy.io/?http://mibanca.runasp.net/api'
};

export const environment = {
  production: false,

  // API Gateway para autenticación JWT
  apiGatewayUrl: 'https://apigateway-hyaw.onrender.com/api',

  // URLs directas a los microservicios (CORS habilitado)
  catalogosServiceUrl: 'https://catalogos-service.onrender.com/api',
  habitacionesServiceUrl: 'https://habitaciones-service.onrender.com',
  reservasServiceUrl: 'https://reservas-service.onrender.com',
  usuariosPagosServiceUrl: 'https://usuarios-pagos-service.onrender.com/api',

  // GraphQL endpoint para habitaciones
  habitacionesGraphqlUrl: 'https://habitaciones-service.onrender.com/graphql',

  // API del banco
  bankApiUrl: 'http://mibanca.runasp.net/api',

  // Backend Django Local
  djangoUrl: 'http://localhost:8000'
};

export const environment = {
  production: true,
  self: 'http://46.101.183.51:9080',
  storage: {
    token: 'token'
  },
  services: {
    bind: {
      apiUrl: 'http://192.168.1.100:9081/api/v1' //'http://46.101.183.51:9081/api/v1'
    },
    api: {
      apiUrl: 'http://192.168.1.100:9082/api/v1' //'http://46.101.183.51:9082/api/v1'
    }
  }
};

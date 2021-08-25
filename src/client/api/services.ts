import createService from './provider';

const serviceConfig = {
  getCars: {
    url: '/questions',
    method: 'GET',
    authRequired: false,
  },
};

const services = createService(serviceConfig);

export default services;

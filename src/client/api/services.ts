import createService from './provider';

const serviceConfig = {
  getQuestion: {
    url: '/question',
    method: 'GET',
    authRequired: false,
  },
};

const services = createService(serviceConfig);

export default services;

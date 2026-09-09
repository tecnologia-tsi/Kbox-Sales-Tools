import container from '../../../../../apps/application/backend/dependency-injection';

let secuential = process.env.CUSTOMERS_SECUENTIAL ? parseInt(process.env.CUSTOMERS_SECUENTIAL) : 1;

export function customerSecuential() {
  return secuential;
}

export function customerSecuentialIncrementer() {
  const logger = container.get('Shared.Logger');
  logger.info(`A new customer secuential has been used ${secuential}`);
  secuential++;
}

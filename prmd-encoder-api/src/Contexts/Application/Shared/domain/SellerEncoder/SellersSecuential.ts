import container from '../../../../../apps/application/backend/dependency-injection';

let secuential = process.env.SELLERS_SECUENTIAL ? parseInt(process.env.SELLERS_SECUENTIAL) : 1;

export function SellerSecuential() {
  return secuential;
}
export function SellerSecuentialIncrementer() {
  const logger = container.get('Shared.Logger');
  logger.info(`A new seller secuential has been used ${secuential}`);
  secuential++;
}

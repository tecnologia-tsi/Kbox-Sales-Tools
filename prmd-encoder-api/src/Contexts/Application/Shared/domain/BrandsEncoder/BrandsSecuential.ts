import container from '../../../../../apps/application/backend/dependency-injection';

let secuential = process.env.BRANDS_SECUENTIAL ? parseInt(process.env.BRANDS_SECUENTIAL) : 1;

export function BrandSecuential() {
  return secuential;
}
export function BrandSecuentialIncrementer() {
  const logger = container.get('Shared.Logger');
  logger.info(`A new brand secuential has been used ${secuential}`);
  secuential++;
}

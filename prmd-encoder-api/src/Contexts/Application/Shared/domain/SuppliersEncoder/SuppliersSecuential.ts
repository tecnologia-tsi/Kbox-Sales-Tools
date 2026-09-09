import container from '../../../../../apps/application/backend/dependency-injection';

let secuential = process.env.SUPPLIERS_SECUENTIAL ? parseInt(process.env.SUPPLIERS_SECUENTIAL) : 1;

export function SuppliersSecuential() {
  return secuential;
}
export function SuppliersSecuentialIncrementer() {
  const logger = container.get('Shared.Logger');
  logger.info(`A new supplier secuential has been used ${secuential}`);
  secuential++;
}

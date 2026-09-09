import { HttpApiRequest } from '../../../Shared/infrastructure/httpApiRequest/httpApiRequest';

export const HttpSupplierRepository = async () => await HttpApiRequest('proveedores', null);

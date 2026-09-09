import { HttpApiRequest } from '../../../Shared/infrastructure/httpApiRequest/httpApiRequest';

export const HttpCustomerRepository = async () => await HttpApiRequest('clientes', null);

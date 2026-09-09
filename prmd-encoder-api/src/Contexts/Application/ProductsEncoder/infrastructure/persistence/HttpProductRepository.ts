import { HttpApiRequest } from '../../../Shared/infrastructure/httpApiRequest/httpApiRequest';

export const HttpProductRepository = async (offset: null | number) => await HttpApiRequest('productos', offset);

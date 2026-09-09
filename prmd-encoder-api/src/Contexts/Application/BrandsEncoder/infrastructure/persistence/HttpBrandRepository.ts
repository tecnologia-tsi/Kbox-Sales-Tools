import { HttpApiRequest } from '../../../Shared/infrastructure/httpApiRequest/httpApiRequest';

export const HttpBrandRepository = async () => await HttpApiRequest('marcas', null);

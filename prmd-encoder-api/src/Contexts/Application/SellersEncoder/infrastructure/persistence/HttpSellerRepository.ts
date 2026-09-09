import { HttpApiRequest } from '../../../Shared/infrastructure/httpApiRequest/httpApiRequest';

export const HttpSellerRepository = async () => await HttpApiRequest('comerciales', null);

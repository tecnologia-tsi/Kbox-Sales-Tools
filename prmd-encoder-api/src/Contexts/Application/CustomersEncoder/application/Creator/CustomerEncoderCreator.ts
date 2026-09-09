import { CreateCustomerEncoderResponse } from './CreateCustomerEncoderResponse';
import { CreateCustomerEncoderRequest } from './CreateCustomerEncoderRequest';
import { CustomerEncoder } from '../../domain/CustomerEncoder';
import { CustomerEncoderCustomerId } from '../../domain/CustomerEncoderCustomerId';
import { CustomerEncoderCountry } from '../../domain/CustomerEncoderCountry';
import { CustomerEncoderCustomerSize } from '../../domain/CustomerEncoderCustomerSize';
import { CustomerEncoderCustomerTypology } from '../../domain/CustomerEncoderCustomerTypology';
import { CustomerEncoderCode } from '../../domain/CustomerEncoderCode';
import { CustomerEncoderName } from '../../domain/CustomerEncoderName';
import { CustomerEncoderIsGroup } from '../../domain/CustomerEncoderIsGroup';
import { CustomerEncoderTypeOfTaxIdentifier } from '../../domain/CustomerEncoderTypeOfTaxIdentifier';
import { CustomerEncoderTaxIdentifier } from '../../domain/CustomerEncoderTaxIdentifier';
import { CustomerEncoderSkipSuggestions } from '../../domain/CustomerEncoderSkipSuggestions';
import { Uuid } from '../../../../Shared/domain/value-object/Uuid';
import { CustomerEncoderId } from '../../domain/CustomerEncoderId';
import { customerSecuentialIncrementer } from '../../../Shared/domain/CustomersEncoder/CustomersSecuential';
import { HttpCustomerRepository } from '../../infrastructure/persistence/HttpCustomerRepository';
import { PromedApiError } from '../../../Shared/domain/PromedApiError';

export class CustomerEncoderCreator {
  constructor() {
  }

  async run(request: CreateCustomerEncoderRequest) {

    const existCustomers = await HttpCustomerRepository();

    if (!existCustomers.length) {
      throw new PromedApiError();
    }
    const customerEncoder = new CustomerEncoder(
      new CustomerEncoderId(Uuid.random().value),
      new CustomerEncoderName(request.name, request.skipSuggestions, existCustomers),
      new CustomerEncoderIsGroup(request.isGroup),
      new CustomerEncoderTypeOfTaxIdentifier(request.typeOfTaxIdentifier),
      new CustomerEncoderTaxIdentifier(request.taxIdentifier, request.skipSuggestions, existCustomers),
      new CustomerEncoderSkipSuggestions(request.skipSuggestions),
      new CustomerEncoderCountry(request.country),
      new CustomerEncoderCustomerTypology(request.typology),
      new CustomerEncoderCustomerSize(request.size),
      new CustomerEncoderCustomerId(null),
      new CustomerEncoderCode('')
    );
    customerEncoder.createCode();
    customerSecuentialIncrementer();

    return new CreateCustomerEncoderResponse(customerEncoder);
  }
}

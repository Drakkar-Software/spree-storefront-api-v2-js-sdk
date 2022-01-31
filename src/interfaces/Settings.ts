import { JsonApiDocument, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'

export interface PaymentAddressesAttr extends  JsonApiDocument {
  payment_addresses: any
}

export interface PaymentAddresses extends JsonApiSingleResponse {
  payment_addresses: PaymentAddressesAttr
}

export interface PaymentAddressesSettingsResult extends ResultResponse<PaymentAddresses> {}

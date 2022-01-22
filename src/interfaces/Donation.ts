import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface DonationAttr extends  JsonApiDocument {
  id: string
  attributes: {
    created_at: number
    amount: number
    currency: string
    blockchain: string
    transaction_id: string
    transaction_web_url: string
    addressTo: string
    approved: boolean
  }
}

export interface Donations extends JsonApiListResponse {
  data: DonationAttr[]
}

export interface Donation extends JsonApiSingleResponse {
  data: DonationAttr
}

export interface DonationResult extends ResultResponse<Donation> {}

export interface DonationsResult extends ResultResponse<Donations> {}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type CreateOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

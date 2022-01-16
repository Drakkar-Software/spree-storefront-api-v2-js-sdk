import {JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse} from './JsonApi'
import { ResultResponse } from './ResultResponse'
import {WithCommonOptions} from "./WithCommonOptions";
import {WishlistsCreate, WishlistsDefault, WishlistsList, WishlistsShow} from "./Wishlist";

export interface DonationsAttr extends JsonApiDocument {
  id: string
  token: string
  items: {
    donation: Donation
  }[]
}

export interface Donations extends JsonApiListResponse {
  data: DonationsAttr[]
}

export interface Donation extends JsonApiSingleResponse {
  data: DonationsAttr
}

export interface DonationResult extends ResultResponse<Donation> {}

export interface DonationsResult extends ResultResponse<Donations> {}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type CreateOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

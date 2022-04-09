import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'

export interface CreditAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    iso: string
  }

  relationships: IRelationships
}

export interface ICredit extends JsonApiSingleResponse {
  data: CreditAttr
}

export interface ICredits extends JsonApiListResponse {
  data: CreditAttr[]
}

export interface ICreditResult extends ResultResponse<ICredit> {}

export interface ICreditsResult extends ResultResponse<ICredits> {}

export type ListOptions = WithCommonOptions

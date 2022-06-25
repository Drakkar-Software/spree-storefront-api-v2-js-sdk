import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface SubscriptionAttr extends  JsonApiDocument {
  id: string
  attributes: {
    created_at: number
    eligible_for_subscription: boolean
    cancellation_reasons: string
    next_occurrence_at: number
    cancelled_at: number
    enabled: boolean
    paused: boolean
    frequency: string
    variant_id: string
  }
}

export interface Subscriptions extends JsonApiListResponse {
  data: SubscriptionAttr[]
}

export interface Subscription extends JsonApiSingleResponse {
  data: SubscriptionAttr
}

export interface SubscriptionResult extends ResultResponse<Subscription> {}

export interface SubscriptionsResult extends ResultResponse<Subscriptions> {}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>


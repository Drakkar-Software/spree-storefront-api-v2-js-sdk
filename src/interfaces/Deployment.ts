import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface DeploymentAttr extends  JsonApiDocument {
  id: string
  attributes: {
    created_at: number
    status: string
    url: string
    name: string
  }
}

export interface Deployments extends JsonApiListResponse {
  data: DeploymentAttr[]
}

export interface Deployment extends JsonApiSingleResponse {
  data: DeploymentAttr
}

export interface DeploymentResult extends ResultResponse<Deployment> {}

export interface DeploymentsResult extends ResultResponse<Deployments> {}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type CreateOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type UpdateOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type StopOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

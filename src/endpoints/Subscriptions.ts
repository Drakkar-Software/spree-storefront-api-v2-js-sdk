import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  SubscriptionsResult,
  Subscriptions as SubscriptionsResponse,
  Subscription as SubscriptionResponse,
  SubscriptionResult,
  ListOptions,
} from '../interfaces/Subscription'
import routes from '../routes'

export default class Subscriptions extends Http {
  public async list(options: ListOptions): Promise<SubscriptionsResult>
  public async list(...allArguments: any[]): Promise<SubscriptionsResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<SubscriptionsResponse>('get', routes.subscriptionsPath(), token, params)
  }
}

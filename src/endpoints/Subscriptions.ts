import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
    SubscriptionsResult,
    Subscriptions as SubscriptionsResponse,
    Subscription as SubscriptionResponse,
    SubscriptionResult,
    ListOptions,
    CreateOptions,
    UpdateOptions,
    StopOptions,
    ShowOptions
} from '../interfaces/Subscription'
import routes from '../routes'

export default class Subscriptions extends Http {
    public async list(options: ListOptions): Promise<SubscriptionsResult>
    public async list(...allArguments: any[]): Promise<SubscriptionsResult> {
        const [tokenOrOptions, positionalParams = {}] = allArguments
        const {token, params} = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<SubscriptionsResponse>('get', routes.subscriptionsPath(), token, params)
    }

    public async create(options: CreateOptions): Promise<SubscriptionResult>
    public async create(...allArguments: any[]): Promise<SubscriptionResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const {token, params} = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<SubscriptionResponse>('post', routes.subscriptionsPath(), token, params)
    }

    public async update(options: UpdateOptions): Promise<SubscriptionResult>
    public async update(...allArguments: any[]): Promise<SubscriptionResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const {token, params} = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<SubscriptionResponse>('put', routes.subscriptionsPath(), token, params)
    }

    public async stop(options: StopOptions): Promise<SubscriptionResult>
    public async stop(...allArguments: any[]): Promise<SubscriptionResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const {token, params} = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<SubscriptionResponse>('delete', routes.subscriptionsPath(), token, params)
    }

    public async show(subscriptionId: string, options: ShowOptions): Promise<SubscriptionResult>
    public async show(...allArguments: any[]): Promise<SubscriptionResult> {
        const [tokenOrOptions, subscriptionId, positionalParams = {}] = allArguments
        const { subscription_id, token, params } = squashAndPreparePositionalArguments(
            [{ subscription_id: subscriptionId }, tokenOrOptions, positionalParams],
            ['subscription_id']
        )

        return await this.spreeResponse<SubscriptionResponse>('get', routes.subscriptionShowPath(subscription_id), token, params)
    }
}

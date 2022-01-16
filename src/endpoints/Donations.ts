import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
    DonationsResult,
    Donations as DonationsResponse,
    Donation as DonationResponse,
    DonationResult,
    ListOptions,
    CreateOptions,
} from '../interfaces/Donation'
import routes from '../routes'

export default class Donations extends Http {
    public async list(options: ListOptions): Promise<DonationsResult>
    public async list(...allArguments: any[]): Promise<DonationsResult> {
        const [tokenOrOptions, positionalParams = {}] = allArguments
        const {token, params} = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DonationsResponse>('get', routes.donationsPath(), token, params)
    }

    public async create(options: CreateOptions): Promise<DonationResult>
    public async create(...allArguments: any[]): Promise<DonationResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const {token, params} = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DonationResponse>('post', routes.donationsPath(), token, params)
    }
}

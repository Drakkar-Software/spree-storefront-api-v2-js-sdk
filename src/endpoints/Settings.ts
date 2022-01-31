import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
    PaymentAddressesSettingsResult,
    PaymentAddresses as PaymentAddressesResponse
} from '../interfaces/Settings'
import routes from '../routes'

export default class Settings extends Http {
    public async paymentAddresses(): Promise<PaymentAddressesSettingsResult>
    public async paymentAddresses(...allArguments: any[]): Promise<PaymentAddressesSettingsResult> {
        const [tokenOrOptions, positionalParams = {}] = allArguments
        const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<PaymentAddressesResponse>('get', routes.paymentAddressesSettingsPath(), {}, params)
    }
}

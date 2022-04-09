import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  ICredits,
  ICreditsResult,
  ListOptions,
} from '../interfaces/Credit'
import routes from '../routes'

export default class Credits extends Http {
  public async list(options?: ListOptions): Promise<ICreditsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options || {}], [])

    return await this.spreeResponse<ICredits>('get', routes.creditsPath(), token, params)
  }
}

import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
    DeploymentsResult,
    Deployments as DeploymentsResponse,
    Deployment as DeploymentResponse,
    DeploymentResult,
    ListOptions,
    CreateOptions,
    UpdateOptions,
    StopOptions,
} from '../interfaces/Deployment'
import routes from '../routes'

export default class Deployments extends Http {
    public async list(options: ListOptions): Promise<DeploymentsResult>
    public async list(...allArguments: any[]): Promise<DeploymentsResult> {
        const [tokenOrOptions, positionalParams = {}] = allArguments
        const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DeploymentsResponse>('get', routes.deploymentsPath(), token, params)
    }

    public async create(options: CreateOptions): Promise<DeploymentResult>
    public async create(...allArguments: any[]): Promise<DeploymentResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DeploymentResponse>('post', routes.deploymentsPath(), token, params)
    }

    public async update(options: UpdateOptions): Promise<DeploymentResult>
    public async update(...allArguments: any[]): Promise<DeploymentResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DeploymentResponse>('put', routes.deploymentsPath(), token, params)
    }

    public async stop(options: StopOptions): Promise<DeploymentResult>
    public async stop(...allArguments: any[]): Promise<DeploymentResult> {
        const [tokenOrOptions, positionalParams] = allArguments
        const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DeploymentResponse>('delete', routes.deploymentsPath(), token, params)
    }
}

import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
    DeploymentsResult,
    Deployments as DeploymentsResponse,
    Deployment as DeploymentResponse,
    DeploymentResult,
    ListOptions,
    ShowOptions,
} from '../interfaces/Deployment'
import routes from '../routes'

export default class Deployments extends Http {
    public async list(options: ListOptions): Promise<DeploymentsResult>
    public async list(...allArguments: any[]): Promise<DeploymentsResult> {
        const [tokenOrOptions, positionalParams = {}] = allArguments
        const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

        return await this.spreeResponse<DeploymentsResponse>('get', routes.deploymentsPath(), token, params)
    }

    public async show(deploymentId: string, options: ShowOptions): Promise<DeploymentResult>
    public async show(...allArguments: any[]): Promise<DeploymentResult> {
        const [tokenOrOptions, deploymentId, positionalParams = {}] = allArguments
        const { deployment_id, token, params } = squashAndPreparePositionalArguments(
            [{ deployment_id: deploymentId }, tokenOrOptions, positionalParams],
            ['deployment_id']
        )

        return await this.spreeResponse<DeploymentResponse>('get', routes.deploymentShowPath(deployment_id), token, params)
    }
}

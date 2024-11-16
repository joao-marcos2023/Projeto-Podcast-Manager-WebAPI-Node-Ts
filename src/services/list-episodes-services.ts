import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcasts-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    const data = await repositoryPodcast();

    responseFormat = {
        statusCode: responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: responseFormat.body = data
    }

    return responseFormat;

}
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";
import { PodcastTransferModel } from "../models/podcasts-transfer-model";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    responseFormat = {
        statusCode: responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: responseFormat.body = data
    }

    return responseFormat;

}
import { IncomingMessage, request, ServerResponse } from "http";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcasts-transfer-model";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { serviceListEpisodes } from "../services/list-episodes-services";

const defaultContent = {"Content-Type": ContentType.JSON};

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));
    response.end()

}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));
    response.end();

}

import * as http from "http";
import { getCategoryEpisodes, getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { HttpMethod } from "./utils/http-methods";
import { Routes } from "./routes/routes";

export const App = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];
    
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
        await getFilterEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.CATEGORIES) {
        await getCategoryEpisodes(request, response);
    }

}
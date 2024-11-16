import * as http from "http";
import { App } from "./app";

const server = http.createServer(App);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
});
import config from "./config";
import { createServer } from "./server";

const server = createServer();

server.listen(config.port, () => {
	console.log(
		`API running on port ${config.port} in ${config.env} environment`,
	);
});

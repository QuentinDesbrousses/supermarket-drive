import { createServer } from "./server";

const server = createServer();

server.listen(3000, () => {
	console.log("API running on port 3000");
});

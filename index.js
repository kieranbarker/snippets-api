const http = require("http");
const express = require("express");
const Snippet = require("./Snippet");

const app = express();

app.set("json spaces", "\t");
app.use(express.json());

const createErrorHandler = res => status => {
	res.status(status).send({
		status,
		statusText: http.STATUS_CODES[status],
	});
};

app.get("/snippets", (req, res) => {
	const { lang } = req.query;

	if (lang) {
		const filtered = Snippet.findWhere({ lang });
		res.send(filtered);
		return;
	}

	res.send(Snippet.all);
});

app.get("/snippets/:id", (req, res) => {
	const { id } = req.params;
	const snippet = Snippet.findOne(id);

	if (!snippet) {
		const sendError = createErrorHandler(res);
		sendError(404);
		return;
	}

	res.send(snippet);
});

app.post("/snippets", (req, res) => {
	const { lang, code } = req.body;

	if (!lang || !code) {
		const sendError = createErrorHandler(res);
		sendError(400);
		return;
	}

	const snippet = new Snippet(lang, code);
	res.status(201).send(snippet);
});

const port = 3000;

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

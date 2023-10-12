const snippets = require("./snippets");

class Snippet {
	static all = [];
	static nextId = 1;

	static findOne(id) {
		return Snippet.all.find(snippet => snippet.id == id);
	}

	static findWhere(obj) {
		const entries = Object.entries(obj);

		const filtered = Snippet.all.filter(snippet =>
			entries.every(([key, val]) => snippet[key] === val)
		);

		return filtered;
	}

	constructor(lang, code) {
		this.id = Snippet.nextId++;
		this.lang = lang;
		this.code = code;
		Snippet.all.push(this);
	}
}

for (const { lang, code } of snippets) {
	new Snippet(lang, code);
}

module.exports = Snippet;

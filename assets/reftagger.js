var refTagger = {
	settings: {
		bibleVersion: "ESV",
		libronixBibleVersion: "DEFAULT",
		addLogosLink: false,
		appendIconToLibLinks: false,
		libronixLinkIcon: "",
		noSearchClassNames: [],
		useTooltip: true,
		noSearchTagNames: ["h1", "h2", "h3", "h4", "h5", "h6", "span", "header"],
		linksOpenNewWindow: true,
		convertHyperlinks: false,
		socialSharing: [],
		caseInsensitive: false,
		tagChapters: true 
	}
};
(function(d, t) {
	var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
	// g.src = "//api.reftagger.com/v2/RefTagger.js";
	g.src = "//duncanjohnson.ca/assets/RefTagger-main.beautified.min.js";
	s.parentNode.insertBefore(g, s);
}(document, "script"));
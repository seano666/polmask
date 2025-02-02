var keywords = ["trump","musk","biden"];
var lorem = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]

function replaceTextWithLorem() {
    function traverseAndReplace(node) {
        if (node.nodeType === Node.TEXT_NODE) {
			let match = false;
			let lowercaseText = node.nodeValue.toLowerCase();
			for (const word of keywords) {
				if (lowercaseText.includes(word.toLowerCase())) {
					match = true;
					break;
				}
			}
            if (match) {
                node.nodeValue = randomLorem(node.nodeValue.length);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(traverseAndReplace);
        }
    }

    traverseAndReplace(document.body);
}

function randomLorem(length) {
	return lorem[Math.floor(Math.random() * lorem.length)].substring(0, length);
}

function getKeywords(filePath) {
  return fetch(filePath)
	.then(response => response.text())
	.then(text => text.split("\n"))
}

function getLorem(filePath) {
  return fetch(filePath)
	.then(response => response.json())
}

function loadExtension() {
	getKeywords("https://gist.githubusercontent.com/JeremyMorgan/77bcfb149837810471b7e8e0efe6eb4a/raw/391572be0e5044a049dd932218be423097daa16d/mutethisshit.txt")
	.then(lines => keywords = keywords.concat(lines));
	
	getLorem("https://baconipsum.com/api/?type=meat-and-filler")
	.then(loremArray => lorem = loremArray);
	
	setInterval(() => replaceTextWithLorem(), 500);
}



(async () => {
    const { allowedWebsites } = await browser.storage.sync.get('allowedWebsites');
    const currentHost = window.location.hostname;

    // Check if the current website matches any entry in the allowed list
    if (allowedWebsites && allowedWebsites.some(site => currentHost.includes(site))) {
        loadExtension();
    }
})();


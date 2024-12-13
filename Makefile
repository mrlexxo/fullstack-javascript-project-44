install: #dependencies installation
	npm ci
brain-games: #deprecated game engine launch - not used any more
	node bin/brain-games.js
brain-even: 
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
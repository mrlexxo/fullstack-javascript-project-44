install: #dependencies installation
	npm ci
brain-games: #deprecated game engine launch - not used any more
	node bin/brain-games.js
brain-even: #launch even game
	node bin/brain-even.js
brain-calc: #launch calc game
	node bin/brain-calc.js
brain-gcd: #launch gcd game
	node bin/brain-gcd.js
brain-progression: #launch prog game
	node bin/brain-progression.js
brain-prime: #launch prime game
	node bin/brain-prime.js
publish: #launch npm publish
	npm publish --dry-run
lint: #launch lint
	npx eslint .
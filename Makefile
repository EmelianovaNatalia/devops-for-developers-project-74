.PHONY: setup test ci

setup:
	cd app && npm install

test:
	cd app && npm test

ci:
	cd app && bash ci-setup.sh

db-migrate:
	cd app && npm run migrate

code-setup:
	cd app && npm install && npm run migrate

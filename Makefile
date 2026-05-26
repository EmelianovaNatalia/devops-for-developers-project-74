.PHONY: setup test ci

setup:
	cd app && npm install --legacy-peer-deps

test:
	cd app && npm test

ci:
	cd app && npm install --legacy-peer-deps && npm test

db-migrate:
	cd app && echo "Migrations skipped in CI"

code-setup:
	cd app && npm install --legacy-peer-deps

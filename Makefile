setup:
	docker compose run --rm app npm install

build:
	docker compose run --rm app npm run build

test:
	docker compose run --rm -e CI=true app npm test

ci:
	docker compose run --rm -e CI=true app npm test




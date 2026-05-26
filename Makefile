ci:
	docker compose build app
	docker compose run --rm -e CI=true app make test

test:
	npm test
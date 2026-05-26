ci:
	docker compose run --rm app npm install --no-audit --no-fund
	docker compose run --rm app npm run build
	docker compose run --rm -e CI=true app make test
	docker compose build app
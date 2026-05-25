ci:
	docker compose run --rm app npm install --no-audit --no-fund
	docker compose run --rm app npm run build
	docker compose build app
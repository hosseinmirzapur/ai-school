sync:
	@echo "Checking out to main branch..."
	@git checkout main
	@echo "Pulling from remote..."
	@git pull origin main
	@echo "Done syncing remote and local."
	@echo "Feel free to remove local feature branch by running git branch -D branch_name"

run:
	@bun run dev

lint:
	@bun run lint

build:
	@bun run build

start:
	@bun run start

clear-cache:
	@rm -rf .next

pm2-stop:
	@pm2 stop ai-school

pm2-start:
	@pm2 start ecosystem.config.js
 
.PHONY: sync run clear-cache lint build start pm2-stop pm2-start
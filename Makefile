sync:
	@echo "Checking out to main branch..."
	@git checkout main
	@echo "Pulling from remote..."
	@git pull origin main
	@echo "Done syncing remote and local."
	@echo "Feel free to remove local feature branch by running git branch -D branch_name"

run:
	npm run dev

.PHONY: sync
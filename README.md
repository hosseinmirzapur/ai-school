# AI SCHOOL

This project is an e-learn platform utilizing AI to provide students with the best quality AI teaching/learning service.

## Getting Started

Run these commands to run the project locally:

```bash
git clone git@github.com:hosseinmirzapur/ai-school.git

cd ./ai-school

# If bun wasn't installed, install it via this command:
curl -fsSL https://bun.sh/install | bash # (you don't need to run this if you already have bun installed)

bun install

bun run dev
```

## Contribution Guide

Follow these steps:

- Make sure you're on the main branch by running `git branch`

- Checkout to a `feat` branch following your name and the title of the change like this: `git checkout -b feat/hossein/readme`

> Note: In the example above, the word `readme` counts as the title
- Make all files staged on the current branch by running `git add -A`

- Commit your changes and for the commit message follow this pattern: `git commit -m "feat(title): short description"`

- Push branch to remote: `git push origin feat/your_name/title`

- Open a pull request on github and merge to main, and remove the feature branch on remote.

- Get back to your code and run:

```bash
make sync
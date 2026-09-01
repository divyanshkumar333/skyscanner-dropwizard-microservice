#!/bin/bash

# Initialize Git Repository and Push to GitHub
# Usage: ./init-git.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "Usage: ./init-git.sh YOUR_GITHUB_USERNAME"
    echo "Example: ./init-git.sh johndoe"
    exit 1
fi

USERNAME=$1
REPO_NAME="skyscanner-dropwizard-microservice"

echo "🚀 Initializing Git repository..."

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Dropwizard microservice for car rental and hotel search"

# Set main branch
git branch -M main

echo ""
echo "✅ Local repository initialized!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named: $REPO_NAME"
echo "3. Do NOT initialize with README, .gitignore, or license"
echo "4. Click 'Create repository'"
echo "5. Run the following commands:"
echo ""
echo "   git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "Or run: git remote add origin https://github.com/$USERNAME/$REPO_NAME.git && git push -u origin main"

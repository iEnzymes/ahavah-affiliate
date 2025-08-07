#!/bin/bash

echo "Removing existing Git repository..."
rm -rf .git
echo "Existing Git repository removed."


echo "Initializing new Git repository..."
git init --initial-branch=master
echo "Git repository initialized."
echo

read -rp "Enter upstream repository URL: " upstream_url
read -rp "Enter origin repository URL: " origin_url
echo

git remote add upstream "$upstream_url"
git remote add origin "$origin_url"

echo "Remote URLs successfully updated:"
echo "$(git remote -v)"
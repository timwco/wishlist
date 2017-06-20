#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build our dist, just to make sure
elm-make Main.elm --output ./dist/main.js


# Add & Commit & Deploy to GH Pages
git add .
git commit -m "rebuild triggered - `date`"
git subtree push --prefix dist origin gh-pages


echo -e "\033[0;32mDone. Thank You, Please Come Again\033[0m"
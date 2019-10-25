#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build our dist, just to make sure
elm make ./src/Main.elm --optimize --output=./dist/elm.js
uglifyjs ./dist/elm.js --compress "pure_funcs=[F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9],pure_getters,keep_fargs=false,unsafe_comps,unsafe" | uglifyjs --mangle --output=./dist/elm.min.js


# Add & Commit & Deploy to GH Pages
git add .
git commit -m "rebuild triggered - `date`"
git subtree push --prefix dist origin gh-pages


echo -e "\033[0;32mDone. Thank You, Please Come Again\033[0m"
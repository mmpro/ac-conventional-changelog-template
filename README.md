# ac-conventional-changelog

Templates, config and context for the AdmiralCloud Changelog.

# Usage
Make sure to install conventional-changelog with
```
npm i conventional-changelog -g
```

Then install this package in your local repository and use the following CLI command to create a CHANGELOG.md file.
```
conventional-changelog -p angular \
-c node_modules/ac-conventional-changelog-template/context.js \
-n node_modules/ac-conventional-changelog-template/config.js \
-i CHANGELOG.md -s
```

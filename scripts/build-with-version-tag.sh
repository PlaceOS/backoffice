
# Get the last tag from the git logs
VERSION=$(git describe --tags --abbrev=0)

# Update core application version if this is the base repository
./node_modules/.bin/gulp update-core-version --v="$VERSION"

# Build application with the grabbed version
./node_modules/.bin/gulp build --prod --aot --v="$VERSION"

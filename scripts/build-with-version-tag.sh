
# Get the last tag from the git logs
VERSION=$(git describe --tags --abbrev=0)

# Update core application version if this is the base repository
gulp update-core-version --v="$VERSION"

# Build application with the grabbed version
gulp build --prod --aot --v="$VERSION"

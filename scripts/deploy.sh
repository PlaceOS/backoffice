#!/bin/bash

UI_NAME="Backoffice UI"

echo "Working on branch '$BRANCH'"
echo "Set user to $GIT_USER<$GIT_EMAIL>"
# Clone the deployment repository
git clone https://$UI_CREDENTIALS@$DEPLOY_REPO_PATH deployment
echo "Cloned https://$UI_CREDENTIALS@$DEPLOY_REPO_PATH"
# Switch branch
if  [ "$BRANCH" = "master" ]; then
    echo "Building to master"
else
    cd ./deployment
    git checkout uat
    git pull
    cd ..
fi
# Move artifacts into deployment repo
rm -rf deployment/$DEPLOY_FOLDER
mv dist deployment/$DEPLOY_FOLDER
echo "Replaced old build with new build"
# Commit build
cd deployment
git add -A
if  [ "$BRANCH" = "master" ]; then
    git commit -m "[$UI_NAME] CI build `date +'%Y-%m-%d %H:%M:%S'`"
    echo "Build committed. Pushing to MASTER..."
    git push -u https://$UI_CREDENTIALS@$DEPLOY_REPO_PATH HEAD:master
else
    git commit -m "[$UI_NAME] CI UAT build `date +'%Y-%m-%d %H:%M:%S'`"
    echo "Build committed. Pushing to UAT..."
    git push -u https://$UI_CREDENTIALS@$DEPLOY_REPO_PATH HEAD:uat
fi

const {
    gitSemanticRelease,
} = require('@abstracter/atomic-release/adapters/git-conventional-release');

const semanticRelease = gitSemanticRelease({
    stableBranchName: 'develop',

    conventionalChangelogWriterContext: {
        host: 'https://github.com',
        owner: 'MrYuion',
        repository: 'backoffice',
        repoUrl: 'https://github.com/PlaceOS/backoffice',
    },
});

semanticRelease.then((release) => {
    // Print the next version (a string)
    release.getNextVersion().then(console.log);

    // Print the next version changelog (a string)
    release.getChangelog().then(console.log);

    // Print previous version (a string])
    release.getVersion().then(console.log);

    // Print a set of issues mentiond in the commits to be released
    //
    // Note: To configure how issues are matched within commits logs
    // create a custom conventional-changelog preset using [parser options](https://git.io/JrWp3)
    // and make sure to include the preset in semanticRelease options (see the docs for "conventionalChangelogPreset")
    release.getMentionedIssues().then(console.log);

    // Print all the previous versions (an array of versions -> ["1.0.1", "0.8.1"], and then their changelogs
    release.getPreviousVersion().then((versions) => {
        console.log(versions);

        // Print each previous version changelog
        for (const version of versions) {
            semanticRelease.getChangelogByVersion(version).then((changelog) => {
                console.log(version);
                console.log(changelog);
            });
        }
    });
});

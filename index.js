const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const commitName = core.getInput("commit-name");

  if(!commitName.toLowerCase().startsWith('fix') || !commitName.toLowerCase().startsWith('feature') ||!commitName.toLowerCase().startsWith('hotfix')){
    core.setFailed("Commit must start with fix/feature/hotfix");
  }
} catch (error) {
  core.setFailed(error.message);
}

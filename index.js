const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const commitName = core.getInput("commit-name");

  if(commitName.toLowerCase().startsWith('fix(')){
    
    const numbers = commitName.substring(4)
    const commitNumber = numbers.substring(0, numbers.indexOf(')'))
    core.setOutput('response', `Your commit number is ${commitNumber}`)*
    core.info(`Your commit number is ${commitNumber}`)
  }else if(commitName.toLowerCase().startsWith('feature(')){
    const numbers = commitName.substring(8)
    const commitNumber = numbers.substring(0, numbers.indexOf(')'))
    core.setOutput('response', `Your commit number is ${commitNumber}`)
    core.info(`Your commit number is ${commitNumber}`)
  }else if(commitName.toLowerCase().startsWith('hotfix(')){
    const numbers = commitName.substring(7)
    const commitNumber = numbers.substring(0, numbers.indexOf(')'))
    core.setOutput('response', `Your commit number is ${commitNumber}`)
    core.info(`Your commit number is ${commitNumber}`)
  }else {
    core.setFailed("Commit must start with fix/feature/hotfix");
  }
} catch (error) {
  core.setFailed(error.message);
}

import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { replaceInFile } from 'replace-in-file';
import { gitP } from 'simple-git';
const git = gitP();

/** Get build number from current git revision */
export const getBuildNumber = (
  options: BuilderOutput,
  context: BuilderContext
) =>
  // get the git hash and branch
  Promise.all([
    git.revparse(['--abbrev-ref', 'HEAD']),
    git.revparse(['--short', 'HEAD']),
  ])
    // combine branch and hash
    .then(([b, v]) => `${b}+sha.${v}`)
    // catch any errors
    .catch((e) => {
      context.logger.error(
        'Could not stamp this build, did you publish files already?',
        e
      );
    });

/** Replace _BUILD_HASH_ in dist files with the current build number */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const replaceBuildHash = async (buildNumber: any, options: any) =>
  await replaceInFile({
    from: /_BUILD_HASH_/g,
    to: buildNumber,
    files: `${options.outputPath}/**/*.js`,
  });

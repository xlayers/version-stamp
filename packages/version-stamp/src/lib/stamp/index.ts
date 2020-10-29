import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { Schema } from './schema';
import { getBuildNumber, replaceBuildHash } from './utils';

export default createBuilder<any>(
  async (options: Schema, context: BuilderContext): Promise<BuilderOutput> => {
    try {
      context.reportStatus(`Starting version stamping`);
      let result: BuilderOutput;

      // we should run a build for the project
      const configuration = options?.configuration || 'production';
      const target = options?.target || 'build';
      const project = options?.project || context?.target?.project || '';
      if (!options.noBuild) {
        const build = await context.scheduleTarget({
          target,
          project,
          configuration,
        });

        result = await build.result;
        options = { ...options, outputPath: result.outputPath as string };
      } else {
        context.logger.info(`📦 Skipping build`);
        const outputPath = options.outputPath;
        result = {
          outputPath,
          success: true,
        };
      }
      // if the build is successfull
      let buildNumber = options.version;

      if (result.success) {
        if (buildNumber) {
          // look into the files and replace the _BUILD_HASH_ with pre-defined version
          const result = await replaceBuildHash(buildNumber, options);
        } else {
          buildNumber = (await getBuildNumber(result, context)) as string;

          // look into the files and replace the _BUILD_HASH_ regex
          await replaceBuildHash(buildNumber, options);
        }
      }
      context.logger.warn(`Build was stamped: ${buildNumber}`);
      context.reportStatus(`Done.`);
      return { success: true };
    } catch (e) {
      return {
        error: e.message,
        success: true,
      };
    }
  }
);

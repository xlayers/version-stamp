import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
} from '@angular-devkit/schematics';
import { addPackageToPackageJson, getWorkspace } from './utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stampBuilder(options: any): Rule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (tree: Tree, _context: SchematicContext) => {
    addPackageToPackageJson(tree, 'replace-in-file', '6.1.0');
    addPackageToPackageJson(tree, 'simple-git', '2.20.1');
    // get the workspace details
    const { path: workspacePath, workspace } = getWorkspace(tree);

    // getting project name
    if (!options.project) {
      if (workspace.defaultProject) {
        options.project = workspace.defaultProject;
      } else {
        throw new SchematicsException(
          'No Angular project selected and no default project in the workspace'
        );
      }
    }

    // Validating project name
    const project = workspace.projects[options.project];
    if (!project) {
      throw new SchematicsException(
        'The specified Angular project is not defined in this workspace'
      );
    }

    // Checking if it is application
    if (project.projectType !== 'application') {
      throw new SchematicsException(
        `Our builder requires an Angular project type of "application" in angular.json`
      );
    }

    // Getting output path from Angular.json
    if (
      !project.architect ||
      !project.architect.build ||
      !project.architect.build.options ||
      !project.architect.build.options.outputPath
    ) {
      throw new SchematicsException(
        `Cannot read the output path(architect.build.options.outputPath) of the Angular project "${options.project}" in angular.json`
      );
    }

    // adding deploy statement for builder
    project.architect['stamp'] = {
      builder: '@xlayers/version-stamp:stamp',
      options: {
        outputPath: project.architect.build.options.outputPath,
      },
    };

    tree.overwrite(workspacePath, JSON.stringify(workspace, null, 2));
    return tree;
  };
}

export default function (options: any): Rule {
  return stampBuilder(options);
}

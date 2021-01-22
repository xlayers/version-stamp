/* eslint-disable @typescript-eslint/no-explicit-any */
import { experimental, JsonParseMode, parseJson } from '@angular-devkit/core';
import { SchematicsException, Tree } from '@angular-devkit/schematics';

export function getWorkspace(
  host: Tree
): { path: string; workspace: experimental.workspace.WorkspaceSchema } {
  const possibleFiles = ['/angular.json', './workspace.json'];
  const path = possibleFiles.find((path) => host.exists(path));

  if (!path) {
    throw new SchematicsException(`Could not find angular.json`);
  }

  const configBuffer = host.read(path);
  if (!configBuffer) {
    throw new SchematicsException(`Could not find angular.json`);
  }

  const content = configBuffer.toString();
  let workspace: experimental.workspace.WorkspaceSchema;

  try {
    workspace = (<any>(
      parseJson(content, JsonParseMode.Loose)
    )) as experimental.workspace.WorkspaceSchema;
  } catch (e) {
    throw new SchematicsException(`Could not parse angular.json: ${e.message}`);
  }

  return { path, workspace };
}
export function sortObjectByKeys(obj: Record<string, unknown>) {
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => (result[key] = obj[key]) && result, {});
}

export function addPackageToPackageJson(
  host: Tree,
  pkg: string,
  version: string
): Tree {
  if (host.exists('package.json')) {
    const sourceText = host.read('package.json')!.toString('utf-8');
    const json = JSON.parse(sourceText);

    if (!json.devDependencies) {
      json.devDependencies = {};
    }

    if (!json.devDependencies[pkg]) {
      json.devDependencies[pkg] = version;
      json.devDependencies = sortObjectByKeys(json.devDependencies);
    }

    host.overwrite('package.json', JSON.stringify(json, null, 2));
  }

  return host;
}

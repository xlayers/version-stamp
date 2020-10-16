<h1 align="center">
  <a href="https://xlayers.app">Welcome to xLayers version-stamp</a>
</h1>

<p align="center" >
  
 <a href="https://xlayers.app">
    <img src="https://img.shields.io/website-up-down-ff69b4-ff69b4/http/shields.io.svg?label=xlayers.app"/>
  </a>

 <a href="https://xlayers.dev">
    <img src="https://img.shields.io/website-up-down-ff69b4-ff69b4/http/shields.io.svg?label=xlayers.dev"/>
  </a>
 
   <a href="https://xlayers.design">
    <img src="https://img.shields.io/website-up-down-ff69b4-ff69b4/http/shields.io.svg?label=xlayers.design"/>
  </a>
</p>

<p align="center" >
  
  <a href="https://twitter.com/xlayers_">
    <img src="https://img.shields.io/badge/say-thanks-ff69b4.svg"/>
  </a>
  
  <a href="https://angular.io">
    <img src="https://img.shields.io/badge/Made%20with-Angular-E13137.svg"/>
  </a>
  
  <a href="https://github.com/xlayers/version-stamp/issues">
    <img src="http://isitmaintained.com/badge/resolution/xlayers/xlayers.svg"/>
  </a>
  
  <br/>
  <a href="https://github.com/xlayers/version-stamp/actions">
    <img src="https://github.com/xlayers/version-stamp/workflows/mainworkflow/badge.svg" />
  </a>
  
</p>

<p align="center" >

  <img src="https://img.shields.io/github/license/xlayers/xlayers.svg"/>
  
 <a href="https://github.com/xlayers/version-stamp">
    <img src="https://img.shields.io/github/contributors/xlayers/version-stamp.svg"/>
  </a>

</p>

<img align="center" src="https://github.com/xlayers/version-stamp/raw/main/assets/xlayers_stamp.png?raw=true"/>

## What is xLayers version-stamp?

With xLayers version-stamp we've started a new initiative of providing a community-driven way of version stamping that will help on a daily base for everybody!
The xLayers projects are driven by community contributions. Please send us your Pull Requests and feedback!

## Quick start

1. Add `@xlayers/stamp` to your project

   ```sh
   ng add @xlayers/stamp
   ```

2. The package will make some small changes to the `angular.json`

3. Add the following snippet (only the version property) to your environment files.

```ts
export const environment = {
  production: false,
  version: '_BUILD_HASH_',
};
```

4. Use the version that the packages has provided in your `environment` properties.

````ts
 import { environment } from '../environment'
 ```
```ts
 @Component({
    selector: 'xlayers-builders-root',
 })
 export class AppComponent {
     version = environment.version;
 }
 ```
5. Now you can stamp your build

```sh
ng run <your-app>:stamp
````

## Usage

You can adjust some options to your needs.
The available options are:

- `--version` - You can put in here your own version.

Example:

```sh
ng run <your-app>:stamp --version="1.0.0"
```

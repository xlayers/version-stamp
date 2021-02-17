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

<p align="center">
   <img width="250" src="https://github.com/xlayers/version-stamp/raw/main/assets/xlayers_stamp.png?raw=true"/>
</p>
  
## What is xLayers version-stamp?

With xLayers version-stamp we've started a new initiative of providing a community-driven way of version stamping that will help on a daily base for everybody!
The xLayers projects are driven by community contributions. Please send us your Pull Requests and feedback!

## Quick start

1. Add `@xlayers/version-stamp` to your project

   ```sh
   ng add @xlayers/version-stamp
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

- `--files` - You can put in here the list of file patterns containing `_BUILD_HASH_`

Example:

```sh
ng run <your-app>:stamp --files=*.js,*.json
```

You can also set the configuration in `angular.json`

```json
  "stamp": {
    "builder": "@xlayers/version-stamp:stamp",
    "options": {
      "outputPath": "dist/packages/demo",
      "files": ["*.js", "*.json"]
    }
  }
```

## Want to help? [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/xlayers/version-stamp/issues)

Want to file a bug, contribute some code, or improve the documentation? Excellent! Read up on our guidelines for [contributing](https://github.com/xlayers/version-stamp/blob/main/CONTRIBUTING.md) and then check out one of our issues in the hotlist: [community-help](https://github.com/xlayers/version-stamp/issues).

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/xlayers/version-stamp/graphs/contributors">
<img src="https://opencollective.com/xlayers/contributors.svg?width=890&button=false" />
</a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/xlayers#backer)]
<a href="https://opencollective.com/xlayers#backers" target="_blank"><img src="https://opencollective.com/xlayers/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/xlayers#sponsor)]

[<img src="https://pbs.twimg.com/profile_images/481333142238679040/ErykRvBG_200x200.png" width="50">](https://www.centigrade.de/en)
<a href="https://opencollective.com/xlayers/sponsor/2/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/3/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/4/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/5/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/6/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/7/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/8/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/xlayers/sponsor/9/website" target="_blank"><img src="https://opencollective.com/xlayers/sponsor/9/avatar.svg"></a>

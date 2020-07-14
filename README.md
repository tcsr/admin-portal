# AdminPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Angular App Performance :
==========================

https://blog.angular.io/angular-tools-for-high-performance-6e10fb9a0f4a

*******  https://christianlydemann.com/the-complete-guide-to-angular-load-time-optimization/   *******

https://angular-guru.com/blog/angular-performance-tips


ng g module [module name] --route [route name] --module [parent module]

ng g module ranking --route ranking --module app.module

The command above will:
Generate a lazy-loaded module called RankingModule
Insert a lazy route in app.module.ts
Generate an eager default route inside the RankingModule
Generate a component that will handle the eager default route

==========================================================================
For larger apps, we can apply more advanced preloading heuristics:

1. Quicklink — preload only modules associated with visible links in the viewport  --->  https://www.npmjs.com/package/ngx-quicklink
2. Predictive prefetching — preload only the modules that are likely to be needed next


"scripts": {
    "prod": "node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng  build --prod",
}


"start": "node --max_old_space_size=5048 ./node_modules/@angular/cli/bin/ng serve",


node --max-old-space-size=8192

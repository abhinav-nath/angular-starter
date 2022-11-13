# A very basic Angular starter project

## Steps to run

- `npm install`
- `ng serve -o`

## Workspace configuration files

| Workspace configuration files | Purpose |
|---|---|
| `package.json` | Configures npm package dependencies that are available to all projects in the workspace. |
| `package-lock.json` | Provides version information for all packages installed into `node_modules` by the npm client. |
| `node_modules/` | Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects. |
| `tsconfig.json` | The base TypeScript configuration for projects in the workspace. All other configuration files inherit from this base file. |

## Application source files

| Application support files | Purpose |
|---|---|
| `app/` | Contains the component files in which your application logic and data are defined. |
| `assets/` | Contains image and other asset files to be copied as-is when you build your application. |
| `favicon.ico` | An icon to use for this application in the bookmark bar. |
| `index.html` | The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any `<script>` or` <link>` tags here manually. |
| `main.ts` | The main entry point for your application. Compiles the application with the JIT compiler and bootstraps the application's root module \(AppModule\) to run in the browser. |
| `styles.css` | Lists CSS files that supply styles for a project. The extension reflects the style preprocessor you have configured for the project. |

Inside the `src` folder, the `app` folder contains your project's logic and data.
Angular components, templates, and styles go here.

| `src/app/` files  | Purpose |
|---|---|
| `app/app.component.ts` | Defines the logic for the application's root component, named `AppComponent`. The view associated with this root component becomes the root of the view hierarchy as you add components and services to your application. |
| `app/app.component.html` | Defines the HTML template associated with the root `AppComponent`. |
| `app/app.component.css` | Defines the base CSS stylesheet for the root `AppComponent`. |
| `app/app.component.spec.ts` | Defines a unit test for the root `AppComponent`. |
| `app/app.module.ts` | Defines the root module, named `AppModule`, that tells Angular how to assemble the application. Initially declares only the `AppComponent`. As you add more components to the app, they must be declared here. |

## Project Screenshot

![Project Screenshot](/src/assets/project-screenshot.png)
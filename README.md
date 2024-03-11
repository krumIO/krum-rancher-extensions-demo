<h1 align="center">Krum Rancher Extensions Demo</h1>

The App Launcher is intended to fill a large gap in functionality for non-operator users of Rancher.  Currently, if a user wants to access a software application running in Rancher/kubernetes, they need to dig deep into the services/ingress section in Rancher, or learn how to build the proxy URL or on their own. Otherwise, operators need to use an ingress to create convenient access for users.

However, the proxy URL can be a powerful tool in Rancher. It allows a user with appropriate access to a namespaced resource to access that resource/application without ingress. 

The App Launcher will expose a top-level directory of service/ingress objects, and pre-build proxy URLs. It will also provide an option to launch that ingress, if available.

## Setup

### Node
We recommend managing node versions with [nvm](https://github.com/nvm-sh/nvm).

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
cd # project directory
nvm install $(cat package.json | grep '\"node\": ' | grep -o '[0-9.]*')
```

### Yarn

We use [corepack](https://nodejs.org/api/corepack.html) (comes with Node.js) to manager our package manger's version. To install, run the following from the project's root directory.

```
corepack enable
```

## Usage

- To run the dev instance pointing at any given rancher installation locally you can use `API=<your rancher URI> yarn dev`
- Global apps will show at the top as a combination of global apps defined by cluster YAML files and user-selected favorites
 *note: global apps can be set by modifying the service's `metadata.annotations['extensions.applauncher/global-app']` to 'true'
- Select different clusters to view the services of. Global Apps perisist across all views.
- The view can be changed with the view buttons from grid to list views.

## Misc

For more info, refer to the [rancher extensions prerequisites](https://rancher.github.io/dashboard/extensions/extensions-getting-started#prerequisites).

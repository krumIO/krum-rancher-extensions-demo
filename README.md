<h1 align="center">Krum Rancher Extensions Demo</h1>

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

### Misc

For more info, refer to the [rancher extensions prerequisites](https://rancher.github.io/dashboard/extensions/extensions-getting-started#prerequisites).

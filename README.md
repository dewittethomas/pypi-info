# pypi-info

[![npm](https://img.shields.io/npm/v/pypi-info.svg)](https://www.npmjs.com/package/pypi-info)

A npm-package for getting information from a pypi-package

## Installation
To install the package run this command:

```bash
npm install pypi-info
```

## Usage

### getPackage

```js
getPackage("pypi-info")
```

Demo:

```js
const pypiInfo = require("pypi-info")

pypiInfo.getPackage("pypi-info")
    .then((package) => console.log(package))
```

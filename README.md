# pypi-info

[![npm](https://img.shields.io/npm/v/pypi-info.svg)](https://www.npmjs.com/package/pypi-info)

A simple tool to get information of pypi packages.

## Installation
To install the package run this command:

```bash
npm install pypi-info
```

## Usage

### GET Package

```js
const getPackage = require("pypi-info").getPackage;

getPackage("ip-address")
    .then((package) => console.log(package))
```
# pypi-info

[![npm](https://img.shields.io/npm/v/pypi-info.svg)](https://www.npmjs.com/package/pypi-info)
[![MIT License](https://img.shields.io/npm/l/pypi-info.svg)](https://github.com/dewittethomas/pypi-info/blob/master/LICENSE)

A simple Node.js library to fetch information about Python packages from PyPI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Getting Package Information](#getting-package-information)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the `pypi-info` library using npm:

```bash
npm install pypi-info
```

## Usage

### Getting Package Information

You can use this library to retrieve information about a Python package from PyPI. Here's an example of how to use it:

```javascript
const { getPackage } = require("pypi-info");

getPackage("ip-address")
    .then((packageInfo) => {
        // Access package information here
        console.log(packageInfo);
    })
    .catch((error) => {
        console.error("Error fetching package information:", error);
    });
```

## Contributing

Contributions to this project are welcome. If you have any improvements or bug fixes, please submit a pull request.

## License

This project is licensed under the MIT License.
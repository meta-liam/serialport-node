#!/bin/bash
set -e

shell_dir=$(dirname $0)
cd ${shell_dir}

rm -rf lib
npm run build

npm i --registry=https://registry.npmmirror.com 

# cp -rf src/example.js lib/


#!/bin/bash

rm -rf bin
mkdir bin

cd react_flask/static
npm run build
cd ..
cd ..

tar --create --gzip --verbose --file react_flask.tar.gz --exclude __pycache__ --exclude static/node_modules --exclude static/images --exclude static/sass --exclude config_example.json -C react_flask .
mv -f react_flask.tar.gz bin/

set -e

#python tests/

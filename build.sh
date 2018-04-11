#!/bin/bash

rm -rf bin
mkdir bin

tar --create --gzip --verbose --file react_flask.tar.gz --exclude __pycache__ --exclude config_example.json -C react_flask .
mv -f react_flask.tar.gz bin/

set -e

#python tests/

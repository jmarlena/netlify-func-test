#!/usr/bin/env bash

docker build -t netlify-func-test:dev .

docker run -it -p 9820:9820 netlify-func-test:dev  netlify dev


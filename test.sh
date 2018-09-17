#!/bin/bash -e

pushd static/html
./lint.sh
./test.sh
popd

pushd services/auth
./test.sh
popd

pushd services/api
#./test.sh
popd

pushd services/correlator
#./test.sh
popd

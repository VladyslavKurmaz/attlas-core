#!/bin/bash

curl -v -X POST -H "Content-Type: application/json" -d @data.json http://localhost:9081/healthcheck
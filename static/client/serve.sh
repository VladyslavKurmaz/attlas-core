#!/bin/bash -e
<<<<<<< HEAD
. ./.env.sh
export COMPONENT_PARAM_HOST=localhost
case "$(uname -s)" in
   Darwin)
     export COMPONENT_PARAM_HOST=$(ipconfig getifaddr en0)
     ;;
   Linux)
     export COMPONENT_PARAM_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
     ;;
esac
export COMPONENT_PARAM_AUTH_HOST=${COMPONENT_PARAM_HOST}
=======
export $(cat ./.env | grep -v ^# | xargs)
>>>>>>> 2cd809d0a5c3c93b60ee965100c35256fd6a8d2c
ng serve --host=${COMPONENT_PARAM_LSTN} --port=${COMPONENT_PARAM_PORT}

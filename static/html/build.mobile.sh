#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
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
ng build --prod --configuration=production --base-href . --output-path ../../mobile/cordova/www/
sed -i -e "s|</app-root>|$(cat ./src/cordova.patch)|g" ../../mobile/cordova/www/index.html

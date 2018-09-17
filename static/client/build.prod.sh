#!/bin/bash -e
<<<<<<< HEAD
. ./.env.sh
npm i
envsubst < src/environments/environment.prod.ts.template > src/environments/environment.prod.ts
=======
export $(cat ./.env | grep -v ^# | xargs)
>>>>>>> 2cd809d0a5c3c93b60ee965100c35256fd6a8d2c
ng build --configuration=production

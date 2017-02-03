#!/bin/bash

set -x
set -e

[ "${LELYLAN_API_PUBLIC_URL:-}" ] && (grep -l -r api.lelylan.com | xargs sed -i "s@api.lelylan.com@${LELYLAN_API_PUBLIC_URL}@g")
[ "${LELYLAN_PEOPLE_PUBLIC_URL:-}" ] && (grep -l -r people.lelylan.com | xargs sed -i "s@people.lelylan.com@${LELYLAN_PEOPLE_PUBLIC_URL}@g")
[ "${LELYLAN_CLIENT_ID:-}" ] && (grep -l -r 0f132c8b234ce0018ae0a77d8e9f06126e140885ba86d83f41a168a2aacda7da | xargs sed -i "s@0f132c8b234ce0018ae0a77d8e9f06126e140885ba86d83f41a168a2aacda7da@${LELYLAN_CLIENT_ID}@g")
[ "${LELYLAN_TYPES_DASHBOARD_PUBLIC_URL:-}" ] && (grep -l -r lelylan.github.io/types-dashboard-ng | xargs sed -i "s@lelylan.github.io/types-dashboard-ng@${LELYLAN_TYPES_DASHBOARD_PUBLIC_URL}@g")
# [ "${LELYLAN_WEBSOCKETS_PUBLIC_URL:-}" ] && (grep -l -r lelylan-websockets.herokuapp.com | xargs sed -i "s@lelylan-websockets.herokuapp.com@${LELYLAN_WEBSOCKETS_PUBLIC_URL}@g")

grunt build
cp -r /usr/src/app/dist/* /var/www/
nginx -g "daemon off;"

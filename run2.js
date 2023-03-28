#!/bin/sh
UUID=${UUID:-'7682a3f7-3e27-40fe-b206-a2b67013dfc4'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json

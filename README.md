# [Eddystone](https://github.com/don/node-eddystone-beacon) + resin.io

## Introduction

This is a demo uses resin.io and google's beacon format to set up a fleet of iBeacons - *[The physical web](https://google.github.io/physical-web/)*.

This runs on any resin supported device. You will just need to change the base image in FROM command in the [dockerfile](). 

```
e.g FROM resin/edison-node
```

```
e.g FROM resin/raspberrypi2-node
```

It reads CPU usage serves the live reading on webpage served from the device using resin.io's device urls. The url is cast to bluetooth devices in the area. 

Powerlevel (range) can be adjust by setting a resin.io [environment variable](http://docs.resin.io/#/pages/using/env-vars.md) with the key `PWR`

```
eg. PWR = -50 (ranges = -100 to 20, default = -21)
```




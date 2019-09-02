# Caliper GUI

## Get Started

In the `caliper-gui` directory run `npm start`.

## Caliper Server
The server provides an API that supports the configuration files and testing result data transmission between Caliper GUI and Caliper-core modules.

**MongoDB** is required to start the API and Server.

*TODO: integrate with stable version of caliper-cli and caliper-core modules, and re-format the received data into the format that can be easily visualizaed by Caliper GUI visualizations.*

## Caliper GUI
Caliper GUI provides multiple visualizations for the benchmark data from Caliper CLI. The supported visualizations are:

- Transaction latency
- Transaction throughput
- Read latency
- Read throughput

*TODO: using Redux to support global state tree, and making all the test functionties globally accessible in the GUI applications*

*TODO: consider using Electron to wrap the GUI and make it a desktop application for Mac/Linux/Windows.*

## Licensing

- Copyright 2019 Jason You Hyperledger Caliper
- Licensed under Apache 2.0
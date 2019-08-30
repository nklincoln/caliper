/*

*/


import React from "react";
import {
  Card,
  CardBody, 
  CardHeader, 
  CardTitle,
} from "reactstrap";
// for API file POST


export default class ConfigurationGuide extends React.Component {
  render() {
    return (
      <>
        <Card>
        <CardHeader className="text-center">
          <CardTitle tag="h4">Simple Caliper Configuration Guide</CardTitle>
          <p className="card-category">Step-by-step guide for testing with Caliper GUI.</p>
          <hr />
          <p className="text-danger">
            THIS IS A <b>DEMO GUI</b>, AND THE GUI IS UNDERDEVELOPEMNT NOW. TO RUN TEST IN THE FUTURE, YOU NEED TO DOWNLOAD IT TO LOCAL AND RUN GUI-SERVER + MONGDB.
          </p>
        </CardHeader>

        <CardBody>
            <div className="typography-line">
                <p>
                    <span>Step 1</span>
                    Generating configuration files through the form in the <b>Generate New Test Configuration</b> below and save it as a local <i>.yaml</i> file
                </p>
            </div>
            <div className="typography-line">
                <p>
                    <span>Step 2</span>
                    Setup the <b>Fabric Network Configuration</b> with <b>(1)</b> workspace/root-directory of the Hyperledger Fabric, and <b>(2)</b> the network configuration file used for set up Fabric network
                </p>
            </div>
            <div className="typography-line">
                <p>
                    <span>Step 3</span>
                    Upload the <b>Test configuration</b> <i>.yaml</i> file you genearted/saved from your local machine
                </p>
            </div>
            <div className="typography-line">
                <p>
                    <span>Step 4</span>
                    Starting the test with the yellow <b>Start Test</b> button after all the config files are uploaded. (Make sure that the <b>gui-server</b> is running, and <b>MongoDB</b> is installed and running)
                </p>
            </div>
        </CardBody>
      </Card>
      </>
    );
  }
}
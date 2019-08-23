/*!

=========================================================
* Hyperledger Caliper GUI
=========================================================

* Author: Jason You
* GitHub: 
* Licensed under the Apache 2.0 - https://www.apache.org/licenses/LICENSE-2.0

Copyright (c) 2019 Jason You

*/
/*!

- Caliper GUI includes codes from Creative Time, which is licensed
- under the MIT license:
=========================================================
* Bootstrap Theme Copyright (Paper Dashboard React - v1.1.0)
=========================================================
* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Paper Dashboard React - v1.1.0 Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// reactstrap components
import {
  Button,
  Row,
  Col
} from "reactstrap";

// import configuration forms
import TestConfigurationForm from "../components/Forms/TestConfigurationForm";
import FabricConfigurationForm from "../components/Forms/FabricConfigurationForm";

class Configuration extends React.Component {
  constructor(props) {
    super(props);
    this.testConfigElement = React.createRef();
    this.networkConfigElment = React.createRef();
  }

  state = {
    testConfigSet: false,
    networkConfigSet: false,
  }

  setTestConfig = (bool) => {
    this.setState({ testConfigSet: bool });
  }

  setNetworkConfig = (bool) => {
    this.setState({ networkConfigSet: bool });
  }

  disableTestButton = () => {
    console.log("[DEBUG] chile file:", this.testConfigElement.current.state.file);
    // clear the config files in test and network config
    this.testConfigElement.current.removeFile();
    this.networkConfigElment.current.removeFile();
    
    this.setState({
      testConfigSet: false,
      networkConfigSet: false,
    })
  }

  startTest = () => {
    if (!this.state.testConfigSet || !this.state.networkConfigSet) {
      return;
    }

    // TODO: when the start test button is clicked, run the test by calling the API
    // And then get the test result back to here
    // Then jump to the output page, which will get data from server/DB by API call 
    // OR (optinoal) if you can get the data to be updated in seconds with server running
    // caliper core, you can using Socket.IO to get real time data.
    
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="text-center">
            <Button color="warning" style={{width:"300px"}} disabled={!(this.state.testConfigSet && this.state.networkConfigSet)}>Start Test</Button>
            <Button color="danger" style={{width:"100px"}} onClick={this.disableTestButton}>Reset</Button>
            <p className="card-category">
              Test can be started once both "test" and "network" config files are uploaded
            </p>
          </div>
          <div className="text-center">
            <Button color="primary" style={{width:"300px"}} onClick={null}>Using Sample Config Files</Button>
            <p className="card-category">
              Testing With Sample Test & Network Configuration Files
            </p>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <TestConfigurationForm action={this.setTestConfig} ref={this.testConfigElement} />
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <FabricConfigurationForm action={this.setNetworkConfig} ref={this.networkConfigElment} />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Configuration;

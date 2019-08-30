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
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Documentation extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h3 className="title text-primary">Caliper GUI Setup</h3>
                  <p className="category">
                    Step-by-step guide to setup the test on Caliper GUI
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <p>
                      <span>Step 1 <b className="text-warning">[Start MongoDB]</b></span>
                      <b>Installing and start</b> the <b>MongoDB</b> server in your local: <i>$ mongod --dbpath YOUR_PATH</i>. Here YOUR_PATH is the path that you want to store all the DB data and files, and you can just ues <i>$ mongod</i> to use the default path in your local machine. Make sure the port is the default port: <i>http://localhost:27017</i>.
                    </p>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Step 2 <b className="text-warning">[Start GUI Server]</b></span>
                      Make sure that the `gui-server` is started on port: <i>http://localhost:3001</i>
                    </p>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Step 3 <b className="text-warning">[Workspace Configuration]</b></span>
                      Go to the <b>Configuration</b> tab located in the buttton of sidebar to setup the network configuration <b>workspace</b>.
                    </p>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Step 4 <b className="text-warning">[Network Configuration]</b></span>
                      In the same Configuration tab, file and upload the <b>network configuration</b> <i>.yaml</i> file.
                    </p>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Step 5 <b className="text-warning">[Test Configuration]</b></span>
                      Edit or import the <b>benchmark test configuration</b> file for Caliper to test the specified Hyperledger Blockchain, and then upload it.
                    </p>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Step 6 <b className="text-warning">[Start Test]</b></span>
                      <b>Starting the test</b> by clicking on the "Start Test" button in the <b>Configuration</b> tabon or the top left corner (TODO) , and wait it to finish. When the test starts, the start test button will be disabled and need to wait until the test is finished. An alert will popout and show that the test is finished (TODO).
                    </p>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Step 7 <b className="text-warning">[Dashboard Result]</b></span>
                      <b>Visualization</b> of the Blockchain performance benchmark with be available in "Dashboard" after the test finished.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h3 className="title text-primary">Caliper Configuration Guide</h3>
                  <p className="category">
                    Here are all the test information that you need to provide.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <h3>
                      <span>Test Configuration JSON Template</span>
                      Here I will provide the the configuration template...
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h3 className="title text-primary">Caliper Benchmark Data Output</h3>
                  <p className="category">
                    You can download the data history or provide them for visualiation.
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <h3>
                      <span>Test Ouput Data JSON Template</span>
                      Here I will provide the the test output data template and how to download and upload them...
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

{/* 
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Paper Table Heading</h5>
                  <p className="category">
                    Created using Montserrat Font Family
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <h1>
                      <span>Header 1</span>
                      The Life of Paper Dashboard
                    </h1>
                  </div>
                  <div className="typography-line">
                    <h2>
                      <span>Header 2</span>
                      The Life of Paper Dashboard
                    </h2>
                  </div>
                  <div className="typography-line">
                    <h3>
                      <span>Header 3</span>
                      The Life of Paper Dashboard
                    </h3>
                  </div>
                  <div className="typography-line">
                    <h4>
                      <span>Header 4</span>
                      The Life of Paper Dashboard
                    </h4>
                  </div>
                  <div className="typography-line">
                    <h5>
                      <span>Header 5</span>
                      The Life of Paper Dashboard
                    </h5>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span>Header 6</span>
                      The Life of Paper Dashboard
                    </h6>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Paragraph</span>I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus. I
                      think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Quote</span>
                    <blockquote>
                      <p className="blockquote blockquote-primary">
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at."{" "}
                        <br />
                        <br />
                        <small>- Noaa</small>
                      </p>
                    </blockquote>
                  </div>
                  <div className="typography-line">
                    <span>Muted Text</span>
                    <p className="text-muted">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Primary Text</span>
                    <p className="text-primary">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Info Text</span>
                    <p className="text-info">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Success Text</span>
                    <p className="text-success">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Warning Text</span>
                    <p className="text-warning">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Danger Text</span>
                    <p className="text-danger">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <h2>
                      <span>Small Tag</span>
                      Header with small subtitle <br />
                      <small>Use "small" tag for the headers</small>
                    </h2>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );



  }
}

export default Documentation;

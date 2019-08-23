import React from 'react';
import {
  Card,
  CustomInput, 
  Form, 
  FormGroup,
  Label, 
  CardBody, 
  Button, 
  CardHeader, 
  CardTitle
} from 'reactstrap';
// file sending dependency
import axios from 'axios';

export default class FabricConfigurationForm extends React.Component {
  render() {
    return (
      <>
        <Card>
        <CardHeader className="text-center">
          <CardTitle tag="h4">Fabric Network Configuration</CardTitle>
          <p className="card-category">
            Upload Your Hyperledger Fabric Configuration File. Or Select The <b>Sample</b> Config File.
          </p>
        </CardHeader>

        <CardBody>
          <div className="text-center">
            <Button color="primary" style={{width:"300px"}}>Sample Network Config File</Button>
            {/* <Button color="danger" style={{width:"300px"}}>Clear Form</Button> */}
            </div>
              <Form>
                <FormGroup>
                  <Label for="networkConfigFileBrowser">File Browser with Custom Label</Label>
                  <CustomInput type="file" id="networkConfigFileBrowser" name="customFile" label="Pick your own Fabric config file..." />
                </FormGroup>
              </Form>
            <div className="text-center">
            <Button color="success" style={{width:"300px"}}>Upload Network Config File</Button>
          </div>
        </CardBody>
      </Card>
      </>
    );
  }
}
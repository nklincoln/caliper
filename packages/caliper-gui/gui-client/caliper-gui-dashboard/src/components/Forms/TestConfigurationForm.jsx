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

export default class TestConfigurationForm extends React.Component {

  state = {
    file: null,
  }

  handleFile = (event) => {
    let file = event.target.files[0];
    console.log("[DEBUG FILE]", file);
    this.setState({ file: file });
  }

  handleUpload = () => {
    console.log(this.state, "The State ---- $$$$");

    let file = this.state.file;
    let formData = new FormData();
    let contentType = {
      headers: {
        "Content-Type": "undefined"
      }
    }

    let api = 'http://localhost:3001/v1/test-config';
    formData.append('test-config-file', file);


    // let request = new XMLHttpRequest();
    // request.open('POST', api);
    // request.send(formData);
    
    // await
    axios.post(api, formData, contentType)
    // axios.post(api, formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  removeFile = () => {
    this.setState({ file: null });
  }

  render() {
    return (
      <>
        <Card>
          <CardHeader className="text-center">
            <CardTitle tag="h4">Test Configuration</CardTitle>
            <p className="card-category">
            Upload Your Test Benchmark Configuration File. Or Select The <b>Sample</b> Config File.
            </p>
          </CardHeader>
          <CardBody>
            <div className="text-center">
              <Button color="primary" style={{width:"300px"}}>Sample Test Config File</Button>
              {/* <Button color="danger" style={{width:"300px"}}>Clear Form</Button> */}
            </div>

            <Form>
              <FormGroup>
                <Label for="testConfigFileBrowser">File Browser with Custom Label</Label>
                {/*
                  Remember to disable the file browser when test is running!
                  Just add a 'disabled' attribute in <CustomInput disabled />
                */}
                <CustomInput type="file" id="testConfigFileBrowser" name="test-config-file" label="Pick your own test benchmark file..." onChange={(event) => this.handleFile(event) } />
              </FormGroup>
            </Form>

              <div className="text-center">
                {
                  this.state.file !== null && this.state.file !== undefined
                  ?
                  <>
                    <p className="card-category">The file <b>{this.state.file.name}</b> is uploaded
                      <Button color="danger" onClick={this.removeFile} style={{
                        marginLeft: "36px"
                      }}>Remove</Button>
                    </p>
                  </>
                  :
                  null
                }
                <Button color="success" style={{width:"300px"}} onClick={this.handleUpload}>
                  Upload Test Config File
                </Button>
              </div>
          </CardBody>
        </Card>
      </>
    );
  }
}
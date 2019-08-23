'use strict';

const fs = require("fs");
const shell = require("shelljs");
const express = require("express");
const api = express.Router();
// File upload package setting
const configPath = "data/config/";		// relative to the app.js in ./caliper-api
let networkConfigFile = "";
let testConfigFile = "";
const multer = require("multer");		// for file reading

// caliper-core dependencies
const {
    Blockchain,
    CaliperUtils,
    ClientOrchestrator,
    Config,
    MonitorOrchestrator,
    Report,
    DefaultTest
} = require('caliper-core');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (!checkPath(configPath)) {
			createPath(configPath);
		}		// make sure that path exists
		cb(null, configPath);
	},
	filename: (req, file, cb) => {
		// const filename = file.fieldname + '-' + Date.now();
		const filename = file.fieldname + '.yaml';
		cb(null, filename);
	}
})

// Get the upload multer function to create a publish function
// @param {String} configType: the key or file field name
// @return {String} a publish function
const getPublish = function(configType) {
	let upload = multer({
		storage: storage,
		fileFilter: (req, file, cb) => {
			if (file.mimetype === 'application/octet-stream') {
				return cb(null, false);		// why is the file an application/octet-stream
			}
			if (!['text/vnd.yaml', 'text/yaml', 'text/x-yaml', 'application/x-yaml'].includes(file.mimetype)) {
				return cb({
					statusCode: 400,
					error: 'Only YAML files are allowed',
				})
			}
			cb(null, true);
		}
	 }).single(configType);

	let publish = (req, res, callback) => {
		upload(req, res, (err) => {
			if (err instanceof multer.MulterError) {
				console.error('[Multer ERROR] ' + err);
			} else if (err) {
				callback({ statusCode: 500, error: err });
		   } else {
			   // Successfully uploaded file

			   //TODO: save the file to DB in YAML/JSON format

				// console.log(req, '----req----');
			   console.log(req.file, '----FILE----');		// debug
			   callback({ statusCode: 200, error: null, file: req.file });
		   }
		})
	}
	
	return publish;
}

// Set the network config publish functions
const publishNetworkConfig = getPublish('network-config-file');
const publishTestConfig = getPublish('test-config-file');

 api.post('/network-config', (req, res, next) => {
	publishNetworkConfig(req, res, ({statusCode, error, file}) => {
		 if (statusCode != 200) {
			res.status(statusCode).json({error});
		 } else {
			 // TODO: store the config file in DB
			 //
			
			// CORS setup for different domain name of API and GUI
			// res.header('Access-Control-Allow-Origin', '*');
			// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			  
			// set the config file path so the test can start
			networkConfigFile = "data/config/network-config-file.yaml";
			res.status(statusCode).json({ file });
		 }
	 });
 })

 api.post('/test-config', (req, res, next) => {
	publishTestConfig(req, res, ({statusCode, error, file}) => {
		if (statusCode != 200) {
			res.status(statusCode).json({error});
		} else {
			// TODO: store the config file in DB
			//

			// CORS setup for different domain name of API and GUI
			// res.header('Access-Control-Allow-Origin', '*');
			// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			  
			// set the config file path so the test can start
			testConfigFile = "data/config/test-config-file.yaml";
			res.status(statusCode).json({ file });
		}
	});
})

// Test function to generate test reaults based on given test and network config files.
api.post('/run-test', (req, res, next) => {
	// TODO: make the startTest() return a JSON output so I can visualize it! (Don't even need to be real-time)
	// because this is just a one time test right now!
	let result = startTest();
	if (result) {
		res.end("Test finished!");
	} else {
		res.end("Empty result! Something is wrong!")
	}
})

// Start the Caliper test by calling dependencies in caliper-core
// The main purpose of this function is to get (real-time, not even necessary at this time)
// test results from the test! (JSON)
const startTest = function() {
	if (networkConfigFile === "" || testConfigFile === "") {
		console.log("[ERROR] The config files are not uploaded, cannot start test!");
		return null;
		// TODO: send status code to the browser so it can response to user
	}

	let errorStatus = 0;
    let successes = 0;
    let failures = 0;

    let configObject = CaliperUtils.parseYaml(testConfigFile);
	let networkObject = CaliperUtils.parseYaml(networkConfigFile);
	
	console.log(JSON.stringify(configObject, false, 2));
}

// Check the existence of a path, and create if it doesn't exists
const checkPath = function(path) {
	return fs.existsSync(path);
}

// recursively create directory in path
const createPath = function(path) {
	shell.mkdir('-p', path);
}

// TODO: remove the configuration files after closing/finishing
const clean = function(obj) {
	// Let the test function know that no current config files provided
	networkConfigFile = "";
	testConfigFile = "";
	// Delete to local temp config files
	
}


module.exports = api;

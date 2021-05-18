

Prerequisites For WebDriverIO:
===========================
Before we proceed further to executing Selenium automation testing scripts in this WebDriverIO, make sure to have the below things set up.

Step1>Installed Node and npm

Step2> Creating A Project Workspace For WebDriverIO

mkdir IGSProject &amp;&amp; cd IGSProject

Step3>Initialize package.json
npm init -y

Step3>Install WebdriverIO CLI
	
npm i --save-dev @wdio/cli

Step4>WebdriverIO Configuration

./node_modules/.bin/wdio config -y

Step5>Create A Test Folder

./test/specs/IGS.js

Step6>Verify The wdio Test Runner
	
./node_modules/.bin/wdio run wdio.conf.js ---->wdio.conf.js file and prepares the Selenium testing suite according to the configuration mentioned in the file. Then it picks the specs file mentioned in the wdio.conf.js and starts executing the script. In our case, we have set specs: [ ‘./test/specs/**/*.js’] so, it will start all js file present under the ‘./test/specs folder’.
# Admin (Web App)

One Paragraph of project description goes here

### Prerequisites
- Node v7.5.0


### Get started
Clone this project:

	$ git clone https://github.com/ldmarz/admin.git
Go to web_app folder && Install dependencies:

	$ cd web_app && npm install
Configure route to backend on file **webpack.config.js**:

	if (isProd) {
	  API_URL = '';
	  backendProxyTarget = '';
	} else {
	  // For development I was using a proxy with webpack to avoid CORS
	  API_URL = '/api';
	  backendProxyTarget = 'http://localhost:3000';
	}

		

Start project
    
    $ npm run start


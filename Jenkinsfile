pipeline {
	agent any
	
	tools {nodejs "nodejs"}
	
	stages {

		stage("build frontend"){

			steps {
                sh " rm -rf animatedtalkingheads.web"
			    sh "git clone https://github.com/workshopapps/animatedtalkingheads.web.git"
                dir('animatedtalkingheads.web') {
                   
                    sh "npm install"
                    sh "npm run build"
                    
                }
			} 
	    }
		stage("Deploy frontend"){

			steps {
                
				sh "sudo cp -fr ${WORKSPACE}/animatedtalkingheads.web/build/* /home/omiebi/voxclips/frontend"
				sh "sudo systemctl restart voxclips.service"
			} 
	    }
		
    }
}

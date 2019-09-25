// install docker 
// tutorial : https://getintodevops.com/blog/the-simple-way-to-run-docker-in-docker-for-ci

pipeline {
    
    
    agent any
    tools {nodejs "nodeTS"}

    stages {
        stage('install') {
            steps {
                sh 'chmod +x frontDeploy.sh'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh './node_modules/.bin/wdio wdio.conf.js'
                junit './*.xml'
            }
        }
        stage('Deploy') {
            steps {
                sh './frontDeploy.sh'
            }
        }
    }
}

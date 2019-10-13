// install docker 
// tutorial : https://getintodevops.com/blog/the-simple-way-to-run-docker-in-docker-for-ci

pipeline {
    
    
    agent any
    tools {nodejs "nodeTS"}

    stages {
        stage('install') {
            steps {
                
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
            }
        }
        stage('Deploy') {
            steps { 
                sh 'ls'
                sh '''
                    IMAGE=vuejs-docker
                    CONTAINER=vuejs-docker-container
                    PORT=9090
                    EXPORT=80

                    docker build -t $IMAGE .

                    if docker container ls | grep $CONTAINER > /dev/null; then
                    docker container stop $CONTAINER
                    fi


                    if docker container ls -a | grep $CONTAINER > /dev/null; then
                    docker container rm $CONTAINER
                    fi


                    docker run --name $CONTAINER -d -p $PORT:$EXPORT $IMAGE

                '''
            }
        }
    }
    post {
        always {
            junit '*.xml'
        }
    }
}

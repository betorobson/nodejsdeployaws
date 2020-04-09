pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            image: 'betorobson/nodejsapp1:jenkins-dev-v1'
            /*additionalBuildArgs  '-t betorobson/nodejsapp1:jenkins-dev-v1'*/
            registryUrl 'https://hub.docker.com/'
            registryCredentialsId 'dockerhub'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}

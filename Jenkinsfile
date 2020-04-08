pipeline {

  environment {
    registry = "betorobson/nodejsapp1"
    registryCredential = 'dockerhub'
  }

  agent { dockerfile true }

  stages {
    stage('Publish Image') {
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
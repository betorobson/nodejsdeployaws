pipeline {

  environment {
    registry = "betorobson/nodejsapp1"
    registryCredential = 'dockerhub'
  }

  agent { dockerfile true }

  stages {
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', docker-hub-credentials ) {
            dockerImage.push("${env.BUILD_NUMBER}")
          }
        }
      }
    }
  }

}
pipeline {

  environment {
    registry = "betorobson/nodejsapp1"
    registryCredential = 'dockerhub'
  }

  agent { dockerfile true }
  
  tools {nodejs "node" }

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
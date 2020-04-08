pipeline {

  environment {
    registry = "betorobson/nodejsapp1"
    registryCredential = 'dockerhub'
  }

  agent { dockerfile true }
  
  tools {nodejs "node" }

  stages {

    /*
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    */

    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', docker-hub-credentials ) {
            dockerImage.push("${env.BUILD_NUMBER}")
          }
        }
      }
    }

    /*
    stage('Publish Image') {
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    /*

  }

}


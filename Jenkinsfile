environment {
  registry = "betorobson/nodejsapp1"
  registryCredential = 'dockerhub'
}

docker.withRegistry( '', docker-hub-credentials ) {

pipeline {
  environment {
    registry = "betorobson/nodejsapp1"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      checkout scm
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push("${env.BUILD_NUMBER}")
          }
        }
      }
    }
  }
}
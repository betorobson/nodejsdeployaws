pipeline {
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git(url: 'https://bitbucket.org/betorobson/nodejsdeployaws', credentialsId: 'bitbucket')
      }
    }

    stage('Building image') {
      steps {
        script {
          dockerImage = docker.build registry + ":jenkins-dev-v2"
        }

      }
    }

    stage('Deploy Image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }

      }
    }

  }
  environment {
    registry = 'betorobson/nodejsapp1'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
}

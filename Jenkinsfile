pipeline {
  agent {
    docker {
      image 'app1:latest'
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
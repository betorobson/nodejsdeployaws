pipeline {
  agent {
    dockerfile {
      filename 'DockerFile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t app1:v7 -t app1:latest .'
      }
    }

  }
}
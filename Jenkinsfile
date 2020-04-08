node {
  def app
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
    stage('Build image') {
        app = docker.build("betorobson/nodejsapp1")
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
  }
}

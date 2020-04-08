node {
    checkout scm

    def customImage = docker.build("betorobson/nodejsapp1:${env.BUILD_ID}")
    
    customImage.push('jenkins-test')

}
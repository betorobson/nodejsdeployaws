node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {

        def customImage = docker.build("betorobson/nodejsapp1")

        /* Push the container to the custom Registry */
        customImage.push("${env.BUILD_ID}")
    }
}
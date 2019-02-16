
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script{
                docker.build("Node-practice")
                }
            }
        }
    }
}

pipeline {
    agent any
    tools{Docker "Docker"}
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
    }
}
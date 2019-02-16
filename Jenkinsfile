
pipeline {
    agent any
    tools{Docker "docker"}
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
    }
}
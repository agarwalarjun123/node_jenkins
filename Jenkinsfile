
pipeline {
    agent any
    tools{docker "docker"}
    stages {
        stage('build') {
            steps {
                sh "npm install"
                sh 'docker-compose build'
            }
        }
    }
}
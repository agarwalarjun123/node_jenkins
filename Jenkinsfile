
pipeline {
    agent none
    stages {
        stage('build') {
            steps {
                sh "docker image build -t ."
            }
        }
    }
}
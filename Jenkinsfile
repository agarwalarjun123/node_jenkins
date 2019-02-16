
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                def dockerHome = tool 'docker'
                env.PATH = "${dockerHome}/bin:${env.PATH}"
                sh "docker image build -t ."
            }
        }
    }
}
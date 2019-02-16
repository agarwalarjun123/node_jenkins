
pipeline {
    agent any
    stages {
    
        stage('Initialize'){
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

        stage('build') {
            steps {
                sh "docker image build -t ."
            }
        }
    }
}

pipeline {
  agent {
    docker {
      image 'node:7-alpine'
    }
  }

  stages {
    stage('Unit') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
  }
}

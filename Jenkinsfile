pipeline {
    agent any
    
    tools{
        nodejs "NodeJs"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/FelicianoMandjam/LivresApp'
            }
        }
        stage('Install Dependencies') {
            steps {
                    sh 'npm install'
               
            }
        }
        stage('Run Test') {
            steps {
                    sh 'npm test' 
            }
        }
    }
}

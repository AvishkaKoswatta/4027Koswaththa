pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your repository from GitHub
                git 'https://github.com/AvishkaKoswatta/4027Koswaththa.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    docker.build('devops')
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                // Run Docker container
                script {
                    docker.image('devops').run("-p 8080:80", "--name devops_container")
                }
            }
        }
    }
}

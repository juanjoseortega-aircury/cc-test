# IMPORTANT
The recommended way to use the docker container in this project is by using the docker-compose file. The use of the Dockerfile is not wrong and can be preferred by some developers that need deeper access to the container.
## USING A DOCKER-COMPOSE FILE

Using this command we can deploy our page in a container and going here http://localhost:4000/ we can checkdoc if its correctly deployed.
> docker compose up  
## USING A DOCKERFILE

### Setting the project
> docker build -t curacultura -f Dockerfile .

### Container creation
> docker run --name curacultura_website -it -d -v ./:/home/repository -p 4000:4000 curacultura

### Run the containers
> docker start curacultura_website

### Access containers
> docker exec -it curacultura_website bash

### Executing jekyll website
> bundle exec jekyll serve

### Access to project
> http://localhost:4000/

### Stop the containers
> docker stop curacultura_website
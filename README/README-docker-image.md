# Setting the project
> docker build -t curacultura -f Dockerfile .

# Container creation
> docker run --name curacultura_website -it -d -v ./:/home/repository -p 4000:4000 curacultura

## Run the containers
> docker start curacultura_website

## Access containers
> docker exec -it curacultura_website bash

## Executing jekyll website
> bundle exec jekyll serve

## Access to project
> http://localhost:4000/

## Stop the containers
> docker stop curacultura_website

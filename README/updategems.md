# UPDATE GEM PACKAGES TO AVOID VULNERABILITIES 

From time to time it is important to update the version of the gems we are working with in our project because having outdated versions can generate serious security vulnerabilities.

In order to update the version of the packages we are going to execute the following commands.

- export JEKYLL_VERSION=4.2.2 (This is to set the "JEKYLL_VERSION" variable value that you should check at docker-compose which one is the right version to choose in the docker file. You can also check the variable value using "echo JEKYLL_VERSION").
- docker run --rm --volume="$PWD:/srv/jekyll:Z" -it jekyll/jekyll:$JEKYLL_VERSION bundle update (This will update the packages for the Jekyll version we specified before).

Once we have done this and the gems are updated, we can check if the vulnerabilities are solved using "Code Scan" from Git Hub. You must protect your branch and then do a push on it in order to make code scan work and find your vulnerabilities in case you have any.
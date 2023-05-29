FROM ubuntu:22.04
WORKDIR /home/repository

RUN apt update
RUN apt install -y \
    ruby-full \
    build-essential \
  	zlib1g-dev \
    gcc \
    make

RUN echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
RUN echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
RUN echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc

RUN apt install -y jekyll
RUN gem install bundler

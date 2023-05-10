FROM ruby:3.2

RUN apt update && \
    apt install -yq \
        postgresql-client \
        vim \
        build-essential

# Node & Yarn
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -yq yarn

RUN npm install -g esbuild
RUN npm install -g sass

WORKDIR /app

EXPOSE 3000

CMD bundle exec rails server -p 3000

FROM ruby:3.2

RUN apt update && \
    apt install -yq \
        nodejs \
        yarn \
        postgresql-client \
        vim

RUN gem install rails

WORKDIR /app

EXPOSE 3000

CMD bundle exec rails server -p 3000

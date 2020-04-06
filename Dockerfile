FROM ubuntu:latest

WORKDIR /app
COPY . /app

RUN apt-get update && apt-get install -y \
    openjdk-8-jdk && \
    ./gradlew build && \
    useradd -m app 

USER app

CMD java -jar ./build/libs/*.jar
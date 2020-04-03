FROM ubuntu:latest

ENV GRADLE_HOME=/opt/gradle/gradle-6.0
ENV PATH=${GRADLE_HOME}/bin:${PATH}

RUN apt-get update && apt-get install -y \
    openjdk-8-jdk wget unzip && \
    wget https://services.gradle.org/distributions/gradle-6.0-bin.zip -P /tmp && \
    unzip -d /opt/gradle /tmp/gradle-*.zip && \
    rm -rf /tmp && \
    useradd -m app 

EXPOSE 8080

WORKDIR /app
COPY . /app

CMD gradle bootRun
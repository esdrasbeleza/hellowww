FROM maven:3.6.3-jdk-13 as builder
COPY . /home/maven/project
WORKDIR /home/maven/project
RUN mvn package

FROM openjdk:12
RUN mkdir /app
COPY --from=builder /home/maven/project/target/hellowww-java-maven-1.0.jar /app/hellowww.jar
WORKDIR /app
CMD ["java","-jar","-Dserver.port=80","hellowww.jar"]

FROM gradle:6.1.1-jdk13 as builder
COPY . /home/gradle/project
WORKDIR /home/gradle/project
RUN gradle build

FROM openjdk:13
RUN mkdir /app
COPY --from=builder /home/gradle/project/build/libs/hellowww-java-1.0.jar /app/hellowww.jar
WORKDIR /app
CMD ["java","-jar","-Dserver.port=80","hellowww.jar"]

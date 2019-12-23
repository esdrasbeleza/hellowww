FROM openjdk-11-lein as builder
COPY . /home/clojure/project
WORKDIR /home/clojure/project
RUN lein uberjar

FROM openjdk:12
RUN mkdir /app
COPY --from=builder /home/clojure/project/target/hellowww-1.0.0-SNAPSHOT-standalone.jar /app/hellowww.jar
WORKDIR /app
CMD ["PORT=80", "java", "-jar", "hellowww.jar"]
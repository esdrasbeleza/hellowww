FROM clojure
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY project.clj /usr/src/app/
RUN lein deps
COPY . /usr/src/app
RUN mv "$(lein uberjar | sed -n 's/^Created \(.*hellowww\.jar\)/\1/p')" hellowww.jar
CMD ["java", "-jar", "hellowww.jar"]
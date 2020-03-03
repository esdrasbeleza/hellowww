(ns helloworld.core
  (:use ring.adapter.jetty)
  (:gen-class))
(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str "[Clojure] Welcome to "
              (.. java.net.InetAddress getLocalHost getHostName)
              "!\n")})

(defn -main [& args]
  (run-jetty handler {:port (if-let [port (System/getenv "PORT")]
                              (Integer/parseInt port)
                              8080)}))
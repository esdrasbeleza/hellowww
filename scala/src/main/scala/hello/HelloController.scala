package hello

import java.net.{InetAddress,UnknownHostException}
import org.springframework.web.bind.annotation.{RequestMapping,RestController}

@RestController
class HelloController {

    @RequestMapping(Array("/"))
    @throws(classOf[UnknownHostException])
    def index = {
        var hostname = InetAddress.getLocalHost().getHostName()
        s"[Scala] Welcome to ${hostname}"
    }
    
}

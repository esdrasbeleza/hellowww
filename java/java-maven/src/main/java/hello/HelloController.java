package hello;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() throws UnknownHostException {
        var hostname = InetAddress.getLocalHost().getHostName();
        return String.format("[Java-Maven] Welcome to %s!", hostname);
    }
    
}

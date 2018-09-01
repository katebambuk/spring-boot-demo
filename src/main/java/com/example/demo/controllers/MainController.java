package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public String getIndexPage() {
        return "It's works!";
    }

    @GetMapping("/hello")
    public String getHelloWorld() {
        return "Hello world!";
    }
}

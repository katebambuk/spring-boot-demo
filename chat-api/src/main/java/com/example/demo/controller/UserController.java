package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<String> getAllRegisteredUsersLogins() {
        // todo: logging
        return userService.findAllRegisteredUsersLogins();
    }

    @PostMapping("/login")
    public boolean authUser(@RequestBody UserDto userDto) {
        return userService.checkUsersCreds(userDto);
    }

    @PostMapping("/sign-up")
    public boolean registerNewUser(@RequestBody UserDto userDto) {
        return userService.registerNewUser(userDto);
    }

}

package com.example.demo.dto;

import java.io.Serializable;

public class UserDto implements Serializable {

    private String login;
    private String password;
//    private String repeatedPassword;

    public String getLogin() {
        return login;
    }



    public UserDto setLogin(String login) {
        this.login = login;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserDto setPassword(String password) {
        this.password = password;
        return this;
    }

//    public String getRepeatedPassword() {
//        return repeatedPassword;
//    }
//
//    public UserDto setRepeatedPassword(String repeatedPassword) {
//        this.repeatedPassword = repeatedPassword;
//        return this;
//    }
}

package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<String> findAllRegisteredUsersLogins() {
        List<User> users = userRepository.findAll();

        // todo order by last send message
        return users.stream()
                .map(User::getLogin)
                .collect(Collectors.toList());
    }

    public boolean registerNewUser(UserDto userDto) {
        User user = new User()
                .setLogin(userDto.getLogin())
                .setPassword(userDto.getPassword());

        try {
            userRepository.save(user); // todo case if user already exists or we can't save in
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean checkUsersCreds(UserDto userDto) {
        Optional<User> optionalUser = userRepository.findById(userDto.getLogin());

        return (optionalUser.isPresent() &&
                optionalUser.get().getPassword().equals(userDto.getPassword()));
    }
}

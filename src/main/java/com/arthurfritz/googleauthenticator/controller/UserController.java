package com.arthurfritz.googleauthenticator.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arthurfritz.googleauthenticator.dto.UserDto;
import com.arthurfritz.googleauthenticator.entity.User;
import com.arthurfritz.googleauthenticator.service.UserService;

@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/usuarios")
    public Collection<User> listUsuarios() {
        return userService.listUser();
    }
	
	@PostMapping("/usuarios")
    public User adicionarUsuario(@RequestBody @Validated UserDto user) {
        return userService.createUser(user);
    }

	

}

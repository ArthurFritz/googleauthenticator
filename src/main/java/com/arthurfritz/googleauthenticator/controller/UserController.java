package com.arthurfritz.googleauthenticator.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arthurfritz.googleauthenticator.dto.UserDto;
import com.arthurfritz.googleauthenticator.entity.User;
import com.arthurfritz.googleauthenticator.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/usuarios")
    public Collection<User> listUsuarios() {
        return userService.listUser();
    }
	
	@GetMapping("/usuarios/{identifier}")
    public Optional<User> obterUsuario(@PathVariable("identifier") Long identifier) {
        return userService.getUser(identifier);
    }
	
	
	@PostMapping("/usuarios")
    public User adicionarUsuario(@RequestBody @Validated UserDto user) {
        return userService.createUser(user);
    }
	
	@PutMapping("/usuarios/{identifier}")
    public User atualizarUsuario(@RequestBody @Validated UserDto user, @PathVariable("identifier") Long identifier) {
        return userService.updateUser(user, identifier);
    }

	@DeleteMapping("/usuarios/{identifier}")
    public void deletarUsuario(@PathVariable("identifier") Long identifier) {
        userService.removeUser(identifier);
    }

}

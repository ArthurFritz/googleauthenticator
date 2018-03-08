package com.arthurfritz.googleauthenticator.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.arthurfritz.googleauthenticator.dto.UserDto;
import com.arthurfritz.googleauthenticator.entity.User;

public interface UserService {

	List<User> listUser();
	
	Optional<User> getUser(Long identifier);
	
	User updateUser(@Valid UserDto user);
	
	User createUser(@Valid UserDto user);
		
	void removeUser(Long identifier);
	
	
}

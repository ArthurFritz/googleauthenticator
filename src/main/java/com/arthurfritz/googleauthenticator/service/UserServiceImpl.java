package com.arthurfritz.googleauthenticator.service;

import java.util.List;
import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arthurfritz.googleauthenticator.dto.UserDto;
import com.arthurfritz.googleauthenticator.entity.User;
import com.arthurfritz.googleauthenticator.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> listUser() {
		return userRepository.findAll();
	}

	@Override
	public Optional<User> getUser(Long identifier) {
		return userRepository.findById(identifier);
	}

	@Override
	public void removeUser(Long identifier) {
		userRepository.deleteById(identifier);
	}

	@Override
	public User updateUser(UserDto user) {
		Optional<User> usuario = userRepository.findById(user.getIdentifier());
		if(usuario.isPresent()){
			User userUpdate = usuario.get();
			userUpdate.setEmail(user.getEmail());
			userRepository.save(userUpdate);
			return userUpdate;
		}
		throw new ConstraintViolationException("N�o foi poss�vel localizar o usu�rio", null);
	}

	@Override
	public User createUser(UserDto user) {
		User usuario = new User();
		usuario.setEmail(user.getEmail());
		return userRepository.save(usuario);
	}

}

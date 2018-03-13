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
	public User updateUser(UserDto user, Long identifier) {
		Optional<User> usuario = userRepository.findById(identifier);
		if(usuario.isPresent()){
			User userUpdate = usuario.get();
			setInfosUser(user, userUpdate);
			userRepository.save(userUpdate);
			return userUpdate;
		}
		throw new ConstraintViolationException("Não foi possível localizar o usuário", null);
	}

	@Override
	public User createUser(UserDto user) {
		User existUser = userRepository.findFirstByEmail(user.getEmail());
		if(existUser != null){
			throw new ConstraintViolationException("Já existe um usuário com este e-mail", null);	
		}
		User usuario = new User();
		setInfosUser(user, usuario);
		return userRepository.save(usuario);
	}

	private void setInfosUser(UserDto user, User usuario) {
		usuario.setEmail(user.getEmail());
		usuario.setNome(user.getNome());
	}

}

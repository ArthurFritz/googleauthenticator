package com.arthurfritz.googleauthenticator.service;

import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;

import com.arthurfritz.googleauthenticator.dto.GoogleAuthenticatorDto;
import com.arthurfritz.googleauthenticator.entity.User;
import com.arthurfritz.googleauthenticator.repository.UserRepository;

public class GoogleAuthenticatiorServiceImpl implements GoogleAuthenticatorService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public String generateNewHash(Long identifier) {
		Optional<User> user = userRepository.findById(identifier);
		if(user.isPresent()){
			User usuarioAtualizar = user.get();
			usuarioAtualizar.newHash();
			userRepository.save(usuarioAtualizar);
			return usuarioAtualizar.getHashGoogle();
		}
		throw new ConstraintViolationException("Não foi possível localizar o usuário", null);
	}

	@Override
	public void validateHash(GoogleAuthenticatorDto dto) {
		Optional<User> user = userRepository.findById(dto.getIdentifier());
		if(user.isPresent()){
		
		}
		throw new ConstraintViolationException("Não foi possível localizar o usuário", null);
	}

}

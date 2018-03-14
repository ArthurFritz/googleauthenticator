package com.arthurfritz.googleauthenticator.service;

import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.jboss.aerogear.security.otp.Totp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arthurfritz.googleauthenticator.dto.GoogleAuthenticatorDto;
import com.arthurfritz.googleauthenticator.entity.User;
import com.arthurfritz.googleauthenticator.repository.UserRepository;

@Service
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
		throw new ConstraintViolationException("N�o foi poss�vel localizar o usu�rio", null);
	}

	@Override
	public void validateHash(GoogleAuthenticatorDto dto) {
		Optional<User> user = userRepository.findById(dto.getIdentifier());
		if(user.isPresent()){
			String hashGoogle = user.get().getHashGoogle();
			if(hashGoogle == null){
				throw new ConstraintViolationException("N�o h� hash para valida��o", null);
			}
			Totp totp = new Totp(hashGoogle);
			if(!totp.verify(dto.getOtp())){
				throw new ConstraintViolationException("Numero de otp inv�lido", null);
			}
		}else{
			throw new ConstraintViolationException("N�o foi poss�vel localizar o usu�rio", null);
		}
	}

}

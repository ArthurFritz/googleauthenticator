package com.arthurfritz.googleauthenticator.service;

import java.util.Optional;

import javax.validation.Valid;

import com.arthurfritz.googleauthenticator.dto.GoogleAuthenticatorDto;
import com.arthurfritz.googleauthenticator.entity.User;

public interface GoogleAuthenticatorService {
	
	String generateNewHash(Long identifier);

	void validateHash(@Valid GoogleAuthenticatorDto dto);
	
}

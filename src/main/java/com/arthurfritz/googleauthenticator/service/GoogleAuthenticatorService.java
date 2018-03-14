package com.arthurfritz.googleauthenticator.service;

import javax.validation.Valid;

import com.arthurfritz.googleauthenticator.dto.GoogleAuthenticatorDto;

public interface GoogleAuthenticatorService {
	
	String generateNewHash(Long identifier);

	void validateHash(@Valid GoogleAuthenticatorDto dto);
	
}

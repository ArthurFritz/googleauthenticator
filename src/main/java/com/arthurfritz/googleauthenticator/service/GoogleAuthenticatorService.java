package com.arthurfritz.googleauthenticator.service;

public interface GoogleAuthenticatorService {
	
	void newHash(Long idUser);
	
	void removeHash(Long idUser);
	
	void validate(Long idUser, String otp);
}

package com.arthurfritz.googleauthenticator.dto;

import javax.validation.constraints.NotBlank;

public class GoogleAuthenticatorDto {

	@NotBlank
	private Long identifier;
	
	@NotBlank
	private String otp;

	public Long getIdentifier() {
		return identifier;
	}

	public String getOtp() {
		return otp;
	}
}

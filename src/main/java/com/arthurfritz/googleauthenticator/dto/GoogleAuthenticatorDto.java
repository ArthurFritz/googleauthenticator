package com.arthurfritz.googleauthenticator.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class GoogleAuthenticatorDto {

	@NotNull
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

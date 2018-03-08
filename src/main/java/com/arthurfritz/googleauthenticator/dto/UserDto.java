package com.arthurfritz.googleauthenticator.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {

	private Long identifier;
	
	@NotBlank
	@Email
	private String email;

	public Long getIdentifier() {
		return identifier;
	}

	public String getEmail() {
		return email;
	}

}

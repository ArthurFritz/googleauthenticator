package com.arthurfritz.googleauthenticator.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {

	private Long identifier;
	
	@NotBlank
	@Email
	private String email;
	
	@NotBlank
	private String nome;

	public Long getIdentifier() {
		return identifier;
	}

	public String getEmail() {
		return email.trim();
	}
	
	public String getNome(){
		return nome;
	}

}

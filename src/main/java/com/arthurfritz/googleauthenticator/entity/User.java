package com.arthurfritz.googleauthenticator.entity;

import java.security.SecureRandom;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.apache.commons.codec.binary.Base32;

@Entity
public class User {
	
	@Id @GeneratedValue
	private Long identifier;	
	
	private String email;
	
	private String nome;
	
	private String hashGoogle;

	public Long getIdentifier() {
		return identifier;
	}

	public void setIdentifier(Long identifier) {
		this.identifier = identifier;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getHashGoogle() {
		return hashGoogle;
	}

	public void setHashGoogle(String hashGoogle) {
		this.hashGoogle = hashGoogle;
	}

	public void newHash() {
		SecureRandom random = new SecureRandom();
	    byte[] bytes = new byte[20];
	    random.nextBytes(bytes);
	    Base32 base32 = new Base32();
	    String secretKey = base32.encodeToString(bytes);
	    // make the secret key more human-readable by lower-casing and
	    // inserting spaces between each group of 4 characters
	    this.hashGoogle = secretKey.toLowerCase().replaceAll("(.{4})(?=.{4})", "$1 ");
	}

}

package com.arthurfritz.googleauthenticator.entity;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
		this.hashGoogle =  UUID.randomUUID().toString();
	}

}

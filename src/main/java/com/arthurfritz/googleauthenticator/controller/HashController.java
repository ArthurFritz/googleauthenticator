package com.arthurfritz.googleauthenticator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arthurfritz.googleauthenticator.dto.GoogleAuthenticatorDto;
import com.arthurfritz.googleauthenticator.service.GoogleAuthenticatorService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="*")
public class HashController  {

	@Autowired
	private GoogleAuthenticatorService googleAuthenticationService;
	
	@PutMapping("/authenticator/new/{identifier}")
    public String listUsuarios(@PathVariable("identifier") Long identifier) {
        return googleAuthenticationService.generateNewHash(identifier);
    }
	
	@PostMapping("/authenticator/validate")
    public void obterUsuario(@RequestBody @Validated GoogleAuthenticatorDto dto) {
		googleAuthenticationService.validateHash(dto);
    }

}

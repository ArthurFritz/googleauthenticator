package com.arthurfritz.googleauthenticator.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.arthurfritz.googleauthenticator.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}

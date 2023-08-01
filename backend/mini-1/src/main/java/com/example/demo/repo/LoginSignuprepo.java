package com.example.demo.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.LoginSignup;


@Repository
public interface LoginSignuprepo extends JpaRepository<LoginSignup, Long> {

	LoginSignup findByEmailAndPassword(String email, String password);

}

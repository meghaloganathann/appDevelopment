package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Feedback;

public interface Feedbackrepo extends JpaRepository<Feedback, String> {

}
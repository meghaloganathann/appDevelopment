package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Feedback;
import com.example.demo.repo.Feedbackrepo;

@Service

public class FeedbackService {
@Autowired

public Feedbackrepo repo;
public Feedback addDetails(Feedback feed) {
return repo.save(feed);
}


}
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Feedback;
import com.example.demo.service.FeedbackService;



@RestController

@CrossOrigin(origins="http://localhost:3000/")

public class FeedbackController {

@Autowired
public FeedbackService service;
@PostMapping("/feed")
public Feedback postDetails(@RequestBody Feedback feed) {
return service.addDetails(feed);
}

}
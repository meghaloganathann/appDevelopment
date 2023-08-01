package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Carbookingform;
import com.example.demo.service.CarbookingformService;



@RestController

@CrossOrigin(origins="http://localhost:3000")
public class CarbookingformController {

@Autowired
public CarbookingformService service;
@PostMapping("/book")
public String postDetails(@RequestBody Carbookingform book) {
 service.addDetails(book);
 return "value added";
}

@GetMapping("/get")
public List<Carbookingform> get(){
	return service.get();
}
}

package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customersupport;
import com.example.demo.service.CustomersupportService;

@RestController

@CrossOrigin(origins="http://localhost:3000/")

public class CustomersupportController {

@Autowired
public CustomersupportService service;
@PostMapping("/sign")
public Customersupport postDetails(@RequestBody Customersupport sign) {
return service.addDetails(sign);
}

}

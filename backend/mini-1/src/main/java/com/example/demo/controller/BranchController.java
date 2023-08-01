package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Branch;
import com.example.demo.service.BranchService;



@RestController

@CrossOrigin(origins="http://localhost:3000/")

public class BranchController {

@Autowired
public BranchService service;
@PostMapping("/loc")
public Branch postDetails(@RequestBody Branch loc) {
return service.addDetails(loc);
}

}


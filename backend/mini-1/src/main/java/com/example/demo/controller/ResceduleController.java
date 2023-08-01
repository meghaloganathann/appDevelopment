package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.Rescedule;

import com.example.demo.service.ResceduleService;

@RestController

@CrossOrigin(origins="http://localhost:3000/")

public class ResceduleController {

@Autowired
public ResceduleService service;
@PostMapping("/addscedule")
public Rescedule postDetails(@RequestBody Rescedule scedule) {
return service.addDetails(scedule);
}

@GetMapping("/getschedule")
public List<Rescedule> getDetails() {
	return service.getDetail();
			
}

}

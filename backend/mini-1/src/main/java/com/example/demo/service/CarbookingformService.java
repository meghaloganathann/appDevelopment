package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Carbookingform;

import com.example.demo.repo.Carbookingformrepo;


@Service

public class CarbookingformService {
@Autowired

public Carbookingformrepo repo;
public Carbookingform addDetails(Carbookingform book) {
return repo.save(book);
}

public List<Carbookingform> get(){
	return repo.findAll();
}
}
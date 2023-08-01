package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Rescedule;
import com.example.demo.repo.Rescedulerepo;
;

@Service

public class ResceduleService {
@Autowired

public Rescedulerepo repo;

public Rescedule addDetails(Rescedule scedule) {
return repo.save(scedule);
}

public List<Rescedule> getDetail(){
	return repo.findAll();
}


}
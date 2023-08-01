package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customersupport;
import com.example.demo.repo.Customersupportrepo;

@Service

public class CustomersupportService {
@Autowired

public Customersupportrepo repo;
public Customersupport addDetails(Customersupport sign) {
return repo.save(sign);
}


}
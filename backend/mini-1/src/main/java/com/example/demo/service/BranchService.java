package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Branch;
import com.example.demo.repo.Branchrepo;


@Service

public class BranchService {
@Autowired

public Branchrepo repo;
public Branch addDetails(Branch loc) {
return repo.save(loc);
}


}
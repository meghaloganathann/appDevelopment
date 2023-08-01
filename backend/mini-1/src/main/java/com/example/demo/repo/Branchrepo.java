package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Branch;


public interface Branchrepo extends JpaRepository<Branch, String> {

}

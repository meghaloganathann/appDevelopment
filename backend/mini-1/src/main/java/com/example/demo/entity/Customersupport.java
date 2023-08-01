package com.example.demo.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Id;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customersupport {
@Id
private String name;
 private String email;
private String subject;
 private String message;

}

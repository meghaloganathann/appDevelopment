package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Carbookingform {
  @Id
  private String name;
  private String email;
  private String phone;
  private String pickupDate;
  private String returnDate;
  private String serviceAddOns;
  private String location;
  private int registrationNumber;
  private String carModel;
  private int emergencyNumber;
  private int numVehicles;
  private String selectedService;
}

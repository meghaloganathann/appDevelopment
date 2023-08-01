//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entity.Payment;
//import com.example.demo.service.PaymentService;
//
//
//
//@RestController
//
//@CrossOrigin(origins="http://localhost:3000/")
//
//public class PaymentController {
//
//@Autowired
//public PaymentService service;
//@PostMapping("/pay")
//public Payment postDetails(@RequestBody Payment pay) {
//return service.addDetails(pay);
//}
//
//}
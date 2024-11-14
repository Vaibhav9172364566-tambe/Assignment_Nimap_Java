package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudOperationApplication {
	
	

	public static void main(String[] args) {
		
		System.out.println("Start........");
		SpringApplication.run(CrudOperationApplication.class, args);
		System.out.println("end...........");
	}

}

package com.demo.controllerrr;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {
	
	@GetMapping
	public String  	HomeController() {
		return "vaibhav Tambe";
	}

}

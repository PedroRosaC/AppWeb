package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "Pedro") String name) {
	return String.format("Olá %s!", name);
	}
		
	
	@GetMapping("/nome")
	public String nome() {
	return "João da Silva";
	}
	
	
	@GetMapping("/cpf")
	public String cpf() {
	return "123.456.789-95";
	}

}

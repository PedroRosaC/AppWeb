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
    public String hello(
            @RequestParam(value="name", defaultValue="Pedro")
            String name) {

        return String.format("Olá %s!", name);
    }

    @GetMapping("/nome")
    public String nome() {
        return "João da Silva";
    }
		
	@GetMapping("/nome")
	public String nome() {
	return "João da Silva";
	}
	
	
	@GetMapping("/cpf")
	public String cpf() {
	return "123.456.789-95";
	}
	
	@GetMapping("/endereco")
	public String endereco() {
	return "Bairro Camobi - Rua Planeta Júpiter, 157";
	} 
	
	@GetMapping("/soma")
	public int soma(
	        @RequestParam int a,
	        @RequestParam int b) {

	    return a + b;
	}
	
	/* Parte 2 da prova Final -----------------------------------------------------------  */
	
	// Exercício 1 - Aluno
    @GetMapping("/aluno")
    public String aluno() {

        return """
                Nome: Pedro Rosa Cauduro
                Curso: Sistemas de Informação
                """;
    }

    // Exercício 2 - Professor
    @GetMapping("/professor")
    public String professor() {

        return """
                Professor: Alexandre (Lenda)
                Disciplina: Aplicações Web
                """;
    }
 
    // Exercício 3 - Calculadora
    @GetMapping("/calculadora")
    public String calculadora(
            @RequestParam double a,
            @RequestParam double b,
            @RequestParam String operacao) {

        double resultado;

        switch (operacao.toLowerCase()) {

            case "soma":
                resultado = a + b;
                break;

            case "subtracao":
                resultado = a - b;
                break;

            case "multiplicacao":
                resultado = a * b;
                break;

            case "divisao":

                if (b == 0) {
                    return "Não é possível dividir por zero";
                }

                resultado = a / b;
                break;

            default:
                return "Operação inválida";
        }

        return "Resultado: " + resultado;
    }

    
}

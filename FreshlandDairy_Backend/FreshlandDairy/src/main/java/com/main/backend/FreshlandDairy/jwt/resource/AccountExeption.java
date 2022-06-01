package com.main.backend.FreshlandDairy.jwt.resource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class AccountExeption extends RuntimeException{


	private static final long serialVersionUID = 1L;
	
	public AccountExeption(String message) {
		super(message);
		
	}

}

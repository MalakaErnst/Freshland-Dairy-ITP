package com.main.backend.FreshlandDairy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.backend.FreshlandDairy.entity.SMProduct;
import com.main.backend.FreshlandDairy.exception.ResourceNotFoundException;
import com.main.backend.FreshlandDairy.repository.SMProductRepository;




@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SMProductController {
	
	@Autowired
	private SMProductRepository product;
	
	
	//get all product list
	@GetMapping("/product")
	public List<SMProduct> getAllProduct(){
		return product.findAll();
	
	}
	
	//add product
	@PostMapping("/product")
	public SMProduct createProduct( @RequestBody SMProduct p){
		return product.save(p);
		
	}
	 
	
	//get product by pid
	@GetMapping("/product/{pid}")
	public ResponseEntity<SMProduct>getProductByID( @PathVariable Long pid){
		
		SMProduct p = product.findById(pid)
				.orElseThrow(( )-> new ResourceNotFoundException("product not exist with id :" + pid));
		
		return ResponseEntity.ok(p);
//		 return myService.findById(id);	
	}
	
	
	//update product
	@PutMapping("/product/{pid}")
	public ResponseEntity<SMProduct> updateProduct(@PathVariable long pid, @RequestBody SMProduct p){
		SMProduct pp = product.findById(pid)
				.orElseThrow(( )-> new ResourceNotFoundException("product not exist with id :" + pid));	
		
		pp.setpName(p.getpName());
		pp.setPrice(p.getPrice());
		
		SMProduct updateproduct = product.save(pp);
		return ResponseEntity.ok(updateproduct);
		
		
//		return new ResponseEntity<Product>(p, HttpStatus.OK);
	}
	
	
	
	//delete product
	@DeleteMapping("/product/{pid}")
	public ResponseEntity<Void> deleteproduct(@PathVariable long pid){
		
		product.deleteById(pid);
		
		return ResponseEntity.noContent().build(); 
		
	}
	
	
	

}

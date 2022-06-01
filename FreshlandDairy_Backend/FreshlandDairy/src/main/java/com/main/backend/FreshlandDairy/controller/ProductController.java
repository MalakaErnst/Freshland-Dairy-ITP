package com.main.backend.FreshlandDairy.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.main.backend.FreshlandDairy.entity.Product;
import com.main.backend.FreshlandDairy.repository.ProductRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductRepository productJpaRepository;

	@GetMapping("/shop/products")
	public List<Product> getALLProducts() {
		return productJpaRepository.findAll();
	}

	@GetMapping("/shop/products/{id}")
	public Product getProduct(@PathVariable long id) {
		return productJpaRepository.findById(id).get();
	}

	@DeleteMapping("/shop/products/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable long id) {

		productJpaRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/shop/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product product) {
		
		Product productUpdate = productJpaRepository.save(product);

		return new ResponseEntity<Product>(productUpdate, HttpStatus.OK);
	}

	@PostMapping("/shop/products")
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
		
		Product createdProduct= productJpaRepository.save(product);
		
		URI Uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdProduct.getId())
				.toUri();

		return ResponseEntity.created(Uri).build();
	}

}

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

import com.main.backend.FreshlandDairy.entity.Rating;
import com.main.backend.FreshlandDairy.repository.RatingRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RatingController {
	
	@Autowired
	private RatingRepository RatingRepository;
	
	@GetMapping("/shop/rating")
	public List<Rating> getALLRatings() {
		return RatingRepository.findAll();
	}
	
	@DeleteMapping("/shop/rating/{id}")
	public ResponseEntity<Void> deleteRating(@PathVariable long id) {

		RatingRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/shop/rating/{id}")
	public ResponseEntity<Rating> updateRating(@PathVariable long id, @RequestBody Rating rating) {
		
		Rating ratingUpdate = RatingRepository.save(rating);

		return new ResponseEntity<Rating>(ratingUpdate, HttpStatus.OK);
	}

	@PostMapping("/shop/rating")
	public ResponseEntity<Rating> createRating(@RequestBody Rating rating) {
		
		Rating ratingProduct= RatingRepository.save(rating);
		
		URI Uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(ratingProduct.getId())
				.toUri();

		return ResponseEntity.created(Uri).build();
	}

}

package com.main.backend.FreshlandDairy.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.backend.FreshlandDairy.entity.RawMaterial;
import com.main.backend.FreshlandDairy.exception.RawMatirialExeption;
import com.main.backend.FreshlandDairy.repository.RawMaterialRepositary;


@CrossOrigin(origins="http://localhost:4200")

@RestController
@RequestMapping("/users")
public class RawMatirealController {
	
	@Autowired
	public RawMaterialRepositary rawRipo;
	
	@GetMapping("/rawmaterial")
	public List <RawMaterial> getAllMatirials() {
		return rawRipo.findAll();
	}
	
	@GetMapping("/rawmaterial/{id}")
	public ResponseEntity <RawMaterial> getMatirials(@PathVariable long id) {
		RawMaterial Matirial = rawRipo.findById(id).orElseThrow(() -> new RawMatirialExeption("user not found"));
		return ResponseEntity.ok(Matirial);
	}
	
	@PostMapping("/rawmaterial")
	public RawMaterial createRawMaterial(@RequestBody RawMaterial rawmaterial) {
		return rawRipo.save(rawmaterial);
		
	}
	
	@DeleteMapping("/rawmaterial/{id}")
	public ResponseEntity <Map<String, Boolean>> deleterawmaterial (@PathVariable long id){
		
		RawMaterial Matirial = rawRipo.findById(id).orElseThrow(() -> new RawMatirialExeption("user not found"));
		
		rawRipo.delete(Matirial);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/rawmaterial/{id}")
	public ResponseEntity <RawMaterial> updateMatirials(@PathVariable long id, @RequestBody RawMaterial rawmaterial) {
		RawMaterial Matirial = rawRipo.findById(id).orElseThrow(() -> new RawMatirialExeption("user not found"));
		Matirial.setRawMID(rawmaterial.getRawMID());
		Matirial.setRawMName(rawmaterial.getRawMName());
		Matirial.setRawMType(rawmaterial.getRawMType());
		Matirial.setDate(rawmaterial.getDate());
		Matirial.setArrQty(rawmaterial.getArrQty());
		Matirial.setReQty(rawmaterial.getReQty());
		
		RawMaterial updated = rawRipo.save(Matirial);
		return ResponseEntity.ok(updated);
	}
	
	@GetMapping("/rawmaterial/search/{searchTerm}")
	public List <RawMaterial> search(@PathVariable String searchTerm) {
		
        
		return rawRipo.findBySearchTerm(searchTerm);
	}
}

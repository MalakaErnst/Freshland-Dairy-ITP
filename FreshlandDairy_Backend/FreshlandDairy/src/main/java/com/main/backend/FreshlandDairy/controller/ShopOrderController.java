package com.main.backend.FreshlandDairy.controller;

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
import com.main.backend.FreshlandDairy.entity.ShopOrder;
import com.main.backend.FreshlandDairy.repository.ShopOrderRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ShopOrderController {
	
	@Autowired
	private ShopOrderRepository ShopOrderRepository;
	
	@GetMapping("/shop-order/orders")
	public List<ShopOrder> getALLOrders() {
		return ShopOrderRepository.findAll();
	}
	
	@GetMapping("/shop-order/order/{id}")
	public ShopOrder getOrder(@PathVariable Long id) {
		return ShopOrderRepository.findById(id).get();
	}
	
	@DeleteMapping("/shop-order/order/{id}")
	public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {

		ShopOrderRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/shop-order/order/{id}")
	public ResponseEntity<ShopOrder> updateOrder(@PathVariable Long id, @RequestBody ShopOrder order) {
		
		ShopOrder Order = ShopOrderRepository.save(order);

		return new ResponseEntity<ShopOrder>(Order, HttpStatus.OK);
	}

	@PostMapping("/shop-order/order")
	public ShopOrder createOrder(@RequestBody ShopOrder order) {
		
		ShopOrder NewOrder= ShopOrderRepository.save(order);
		return NewOrder;
	}

}

package com.main.backend.FreshlandDairy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.main.backend.FreshlandDairy.entity.ShopOrderDetails;
import com.main.backend.FreshlandDairy.entity.ShopOrderDetailsPK;
import com.main.backend.FreshlandDairy.entity.ShopOrderReciver;
import com.main.backend.FreshlandDairy.repository.ShopOrderDetailsRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ShopOrderDetailsController {
	
	@Autowired
	private ShopOrderDetailsRepository ShopOrderRepository;
	
	@GetMapping("/shop-order/orderdetails")
	public List<ShopOrderDetails> getALLOrdersDetails() {
		return ShopOrderRepository.findAll();
	}
	
//	@GetMapping("/shop-order/orderdetails/{id}")
//	public List<ShopOrderDetails> getOrderDetails(@PathVariable("id") Long id) {
//		return ShopOrderRepository.findByTransactionID(id);
//	}
	
	@DeleteMapping("/shop-order/orderdetails/delete")
	public ResponseEntity<Void> deleteOrder(@RequestBody ShopOrderDetailsPK primarykey) {
		System.out.println(primarykey);
		ShopOrderRepository.deleteById(primarykey);
		return ResponseEntity.noContent().build();
	}

//	@PutMapping("/shop-order/orderdetails/{id}")
//	public ResponseEntity<ShopOrderDetails> updateOrder(@PathVariable Long id, @RequestBody ShopOrderDetails order) {
//		
//		ShopOrderDetails Order = ShopOrderRepository.save(order);
//
//		return new ResponseEntity<ShopOrderDetails>(Order, HttpStatus.OK);
//	}

	@PostMapping("/shop-order/orderdetails")
	public ShopOrderDetails createOrder(@RequestBody ShopOrderReciver order) {
		
		ShopOrderDetails NewOrder = new ShopOrderDetails();
		
		NewOrder.setShopOrderDetailsPK(new ShopOrderDetailsPK(order.getTransactionID(), order.getProductID()));
		NewOrder.setName(order.getName());
		NewOrder.setQuantity(order.getQuantity());
		NewOrder.setTotal(order.getTotal());		
		
		return ShopOrderRepository.save(NewOrder);
	}

}

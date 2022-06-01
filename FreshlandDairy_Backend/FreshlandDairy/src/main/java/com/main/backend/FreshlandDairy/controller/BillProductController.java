package com.main.backend.FreshlandDairy.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.backend.FreshlandDairy.entity.BillProduct;
import com.main.backend.FreshlandDairy.entity.BillProductPK;
import com.main.backend.FreshlandDairy.entity.BillReciver;
import com.main.backend.FreshlandDairy.repository.BillProductRepJpa;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BillProductController {

	
	@Autowired
	private BillProductRepJpa billproduct;
	
	@GetMapping("/billproduct")
	public List<BillProduct> getAllBill() {
		return billproduct.findAll();
	}
	
	
	@PostMapping("/billproduct")
	public BillProduct createBill(@RequestBody BillReciver bill) {
		
		BillProduct NewBill = new BillProduct();
		
		NewBill.setBillproductpk(new BillProductPK(bill.getId(), bill.getpName()));
		NewBill.setQty(bill.getQty());
		NewBill.setAmount(bill.getAmount());
		//NewBill.setTotal(bill.getTotal());		
		
		return billproduct.save(NewBill);
	}
	
	//get bill details by id
		@GetMapping("/billproduct/{id}")
		public List<BillProduct> getBillDetails(@PathVariable Long id) {
			return billproduct.retreveobject(id);
		}
//		
//		@GetMapping("/billproduct/{id}")
//		public Optional<BillProduct> getByID(@PathVariable BillProductPK id) {
//			return billproduct.findById(id);
//		}
//	
	
}

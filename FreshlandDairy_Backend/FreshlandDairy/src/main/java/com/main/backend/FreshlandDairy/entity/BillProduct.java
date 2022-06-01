package com.main.backend.FreshlandDairy.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "BillProduct")
public class BillProduct {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	//private Long pid;
	
	@EmbeddedId
	BillProductPK billproductpk;
	
//	@Column(name = "PName")
//	private String pName;
	
	@Column(name = "Qty")
	private int qty;
	
	@Column(name = "amount")
	private Double amount;
	
//	@ManyToOne
//	@JoinColumn(name ="bp_fk"  )
//	private NewBill newbill;
//	
	
	public BillProduct(){
		
	}

	public BillProductPK getBillproductpk() {
		return billproductpk;
	}

	public void setBillproductpk(BillProductPK billproductpk) {
		this.billproductpk = billproductpk;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

		
	
//public BillProduct(Long pid, String pName, int qty, Double price) {
//	super();
//	this.pid = pid;
//	this.pName = pName;
//	this.qty = qty;
//	this.price = price;
//}



//	public BillProductPK getBillproductpk() {
//		return billproductpk;
//	}
//
//	public void setBillproductpk(BillProductPK billproductpk) {
//		this.billproductpk = billproductpk;
//	}

//	public String getpName() {
//		return pName;
//	}
//
//	public void setpName(String pName) {
//		this.pName = pName;
//	}


	





	
	
}

package com.main.backend.FreshlandDairy.entity;

public class BillReciver {

	private Long id;
	
//	private Long pID;
	
	private String pName;
	
	private int qty;
	
	private Double amount;
	
	
	public BillReciver() {
		
	}


	
public BillReciver(Long id, String pName, int qty, Double amount) {
		super();
		this.id = id;
		this.pName = pName;
		this.qty = qty;
		this.amount = amount;
	}




	public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public Double getAmount() {
	return amount;
}



public void setAmount(Double amount) {
	this.amount = amount;
}



	public int getQty() {
		return qty;
	}


	public String getpName() {
		return pName;
	}


	public void setpName(String pName) {
		this.pName = pName;
	}


	public void setQty(int qty) {
		this.qty = qty;
	}


	
//	public Long gettID() {
//		// TODO Auto-generated method stub
//		return null;
//	}


	
	
	
}


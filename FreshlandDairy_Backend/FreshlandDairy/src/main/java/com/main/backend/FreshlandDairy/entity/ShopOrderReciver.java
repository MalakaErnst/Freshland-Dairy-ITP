package com.main.backend.FreshlandDairy.entity;


public class ShopOrderReciver {
	
	private Long transactionID;
	
	private Long productID;
	
	private String name;
	
	private int quantity;
	
	private Double total;

	public ShopOrderReciver() {
		super();
	}	

	public ShopOrderReciver(Long transactionID, Long productID, String name, int quantity, Double total) {
		super();
		this.transactionID = transactionID;
		this.productID = productID;
		this.name = name;
		this.quantity = quantity;
		this.total = total;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(Long transactionID) {
		this.transactionID = transactionID;
	}

	public Long getProductID() {
		return productID;
	}

	public void setProductID(Long productID) {
		this.productID = productID;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}
	
	
}

package com.main.backend.FreshlandDairy.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Shop_Orders")
public class ShopOrder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "TransactionID" )
	private Long transactionID;
	
	@Column(name = "CustomerID" )
	private String customerID;
	
	@Column(name = "CustomerName" )
	private String customerName;
	
	@Column(name = "DeliveryAddress" )
	private String address;
	
	@Column(name = "Email" )
	private String email;
	
	@Column(name = "ContactNumber" )
	private int number;
	
	@Column(name = "TransactionAmount" )
	private Double amount;
	
	@Column(name = "Date" )
	private Date date;
	
	public ShopOrder() {}	

	public ShopOrder(Long transactionID, String customerID, String customerName, String address, String email,
			int number, Double amount, Date date) {
		super();
		this.transactionID = transactionID;
		this.customerID = customerID;
		this.customerName = customerName;
		this.address = address;
		this.email = email;
		this.number = number;
		this.amount = amount;
		this.date = date;
	}

	public Long getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(Long transactionID) {
		this.transactionID = transactionID;
	}

	public String getCustomerID() {
		return customerID;
	}

	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}	
	
	

}



package com.main.backend.FreshlandDairy.entity;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fmbills")
public class FmBillDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	//private String username;
	
	@Column(name = "discription")
	private String discription;
	
	@Column(name = "amount")
	private double amount;
	
	@Column(name = "billDate")
	private Date billDate;
	
	@Column(name = "BillType")
	private String billType;

	@Column(name = "billmonth")
	private String billmonth;
	
	@Column(name = "billyear")
	private String billyear;
	
	
	public FmBillDetails() {
		 
	}

	
//	public FmBillDetails(String discription, double amount, Date billDate, String billType) {
//	super();
//	//this.id = id;
//	this.discription = discription;
//	this.amount = amount;
//	this.billDate = billDate;
//	this.billType = billType;
//	}
	public FmBillDetails(String discription, double amount, Date billDate, String billType, String billmonth,
			String billyear) {
		super();
		this.discription = discription;
		this.amount = amount;
		this.billDate = billDate;
		this.billType = billType;
		this.billmonth = billmonth;
		this.billyear = billyear;
	}

	
	public long getId() {
		return id;
	}
	
	

	public String getBillmonth() {
		return billmonth;
	}


	public void setBillmonth(String billmonth) {
		this.billmonth = billmonth;
	}


	public String getBillyear() {
		return billyear;
	}


	public void setBillyear(String billyear) {
		this.billyear = billyear;
	}


	public void setId(long id) {
		this.id = id;
	}
	public String getDiscription() {
		return discription;
	}
	public void setDiscription(String discription) {
		this.discription = discription;
	}
	
	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getBillDate() {
		return billDate;
	}

	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}

	public String getBillType() {
		return billType;
	}

	public void setBillType(String billType) {
		this.billType = billType;
	}
	
	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FmBillDetails other = (FmBillDetails) obj;
		return id == other.id;
	}

}

package com.main.backend.FreshlandDairy.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Product")
public class SMProduct {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pid;
	
	@Column(name = "pName")
	private String pName;
	
	@Column(name = "price")
	private float price;
	
	SMProduct(){
		
	}

	public SMProduct(Long pid, String pName, float price) {
		super();
		this.pid = pid;
		this.pName = pName;
		this.price = price;
	}

	public Long getPid() {
		return pid;
	}

	public void setPid(Long pid) {
		this.pid = pid;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	@Override
	public int hashCode() {
		return Objects.hash(pName, pid, price);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SMProduct other = (SMProduct) obj;
		return Objects.equals(pName, other.pName) && Objects.equals(pid, other.pid)
				&& Float.floatToIntBits(price) == Float.floatToIntBits(other.price);
	}

	
	
	

}

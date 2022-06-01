package com.main.backend.FreshlandDairy.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class BillProductPK implements Serializable{
	
	private Long id;
	
	private String pName;
	
	public BillProductPK() {
		
	}

	public BillProductPK(Long id, String pName) {
		super();
		this.id = id;
		this.pName = pName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	
	
	
	

	
	

	
}

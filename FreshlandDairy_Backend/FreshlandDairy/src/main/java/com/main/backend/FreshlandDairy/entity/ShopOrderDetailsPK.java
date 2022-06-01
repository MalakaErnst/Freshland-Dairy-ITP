package com.main.backend.FreshlandDairy.entity;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;

@Embeddable
public class ShopOrderDetailsPK implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long transactionID;	
	
	private Long productID;

	public ShopOrderDetailsPK() {
		super();
	}

	public ShopOrderDetailsPK(Long transactionID, Long productID) {
		super();
		this.transactionID = transactionID;
		this.productID = productID;
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

	@Override
	public int hashCode() {
		return Objects.hash(productID, transactionID);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ShopOrderDetailsPK other = (ShopOrderDetailsPK) obj;
		return Objects.equals(productID, other.productID) && Objects.equals(transactionID, other.transactionID);
	}
	
	
	
	

}

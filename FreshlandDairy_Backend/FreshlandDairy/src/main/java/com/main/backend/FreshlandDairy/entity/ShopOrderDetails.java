package com.main.backend.FreshlandDairy.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "shop_orders_details")
public class ShopOrderDetails {
	
	@EmbeddedId
	ShopOrderDetailsPK shopOrderDetailsPK;
	
	@Column(name = "ProductName" )
	private String name;
	
	@Column(name = "Quantity" )
	private int quantity;
	
	@Column(name = "Total" )
	private Double total;	

	public ShopOrderDetails() {
		super();
	}	

	public ShopOrderDetails(ShopOrderDetailsPK shopOrderDetailsPK, String name, int quantity, Double total) {
		super();
		this.shopOrderDetailsPK = shopOrderDetailsPK;
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

	public ShopOrderDetailsPK getShopOrderDetailsPK() {
		return shopOrderDetailsPK;
	}

	public void setShopOrderDetailsPK(ShopOrderDetailsPK shopOrderDetailsPK) {
		this.shopOrderDetailsPK = shopOrderDetailsPK;
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

	@Override
	public int hashCode() {
		return Objects.hash(name, quantity, shopOrderDetailsPK, total);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ShopOrderDetails other = (ShopOrderDetails) obj;
		return Objects.equals(name, other.name) && quantity == other.quantity
				&& Objects.equals(shopOrderDetailsPK, other.shopOrderDetailsPK) && Objects.equals(total, other.total);
	}	
	
}
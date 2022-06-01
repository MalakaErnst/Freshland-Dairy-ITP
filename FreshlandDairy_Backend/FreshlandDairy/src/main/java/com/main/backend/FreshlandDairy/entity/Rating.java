package com.main.backend.FreshlandDairy.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Rating")
public class Rating {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "CustomerName" )
	private String customerName;
	
	@Column(name = "ProductName" )
	private String productName;
	
	
	@Column(name = "DatePost" )
	private Date DatePost;
	
	@Column(name = "Rating" )
	private Double rating;
	
	public Rating() {
		
	}
	
	public Rating(Long id, String customerName, String productName, Date datePost, Double rating) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.productName = productName;
		DatePost = datePost;
		this.rating = rating;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Date getDatePost() {
		return DatePost;
	}

	public void setDatePost(Date datePost) {
		DatePost = datePost;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	

}

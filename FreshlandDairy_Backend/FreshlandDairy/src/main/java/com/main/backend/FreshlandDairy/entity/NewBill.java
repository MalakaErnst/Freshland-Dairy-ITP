package com.main.backend.FreshlandDairy.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "NewBill")
public class NewBill {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "date")
	private Date date;
	
	@Column(name = "cName")
	private String cName;
	
//	@Column(name = "pName")
//	private String pName;
//	
//	@Column(name = "qty")
//	private int qty;
//	
	@Column(name = "total")
	private Double total;
	
	//@OneToMany(mappedBy= "newbill" , cascade = CascadeType.ALL,orphanRemoval=true)
//	@OneToMany(targetEntity= BillProduct.class , cascade = CascadeType.ALL)
//	@JoinColumn(name ="b_fk",referencedColumnName = "id")
//	private List<BillProduct> products = new ArrayList<>();
	

	public NewBill(){
		
	}

//public NewBill(Long id, Date date, String cName) {
//	super();
//	this.id = id;
//	this.date = date;
//	this.cName = cName;
//}



public NewBill(Long id, Date date, String cName, Double total) {
	super();
	this.id = id;
	this.date = date;
	this.cName = cName;
	this.total = total;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public String getcName() {
	return cName;
}

public void setcName(String cName) {
	this.cName = cName;
}

public Double getTotal() {
	return total;
}

public void setTotal(Double total) {
	this.total = total;
}

@Override
public String toString() {
	return "NewBill [id=" + id + ", date=" + date + ", cName=" + cName + ", total=" + total + ", getId()=" + getId()
			+ ", getDate()=" + getDate() + ", getcName()=" + getcName() + ", getTotal()=" + getTotal() + ", getClass()="
			+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
}



//@Override
//public String toString() {
//	return "NewBill [id=" + id + ", date=" + date + ", cName=" + cName + ", getId()=" + getId() + ", getDate()="
//			+ getDate() + ", getcName()=" + getcName() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
//			+ ", toString()=" + super.toString() + "]";
//}

//	public NewBill(Long id, Date date, String cName) {
//		super();
//		this.id = id;
//		this.date = date;
//		this.cName = cName;
//	}

	
	
	
	
	
	

}

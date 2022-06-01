package com.main.backend.FreshlandDairy.entity;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rawmaterial")
public class RawMaterial {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	
	@Column(name = "rawMID")
	private String rawMID;
	
	@Column(name = "rawMName")
	private String rawMName;
	
	@Column(name = "rawMType")
	private String rawMType;
	
	@Column(name = "arrQty")
	private long arrQty;
	
	@Column(name = "reQty")
	private long reQty;
	
	@Column(name = "date")
	private String date;

	public RawMaterial() {
		super();
	}

	public RawMaterial(String rawMID, String rawMName, String rawMType, long arrQty, long reQty, String date) {
		super();
		this.rawMID = rawMID;
		this.rawMName = rawMName;
		this.rawMType = rawMType;
		this.arrQty = arrQty;
		this.reQty = reQty;
		this.date = date;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRawMID() {
		return rawMID;
	}

	public void setRawMID(String rawMID) {
		this.rawMID = rawMID;
	}

	public String getRawMName() {
		return rawMName;
	}

	public void setRawMName(String rawMName) {
		this.rawMName = rawMName;
	}

	public String getRawMType() {
		return rawMType;
	}

	public void setRawMType(String rawMType) {
		this.rawMType = rawMType;
	}

	public long getArrQty() {
		return arrQty;
	}

	public void setArrQty(long arrQty) {
		this.arrQty = arrQty;
	}

	public long getReQty() {
		return reQty;
	}

	public void setReQty(long reQty) {
		this.reQty = reQty;
	}
	
	
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
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
		RawMaterial other = (RawMaterial) obj;
		return id == other.id;
	}
	
}

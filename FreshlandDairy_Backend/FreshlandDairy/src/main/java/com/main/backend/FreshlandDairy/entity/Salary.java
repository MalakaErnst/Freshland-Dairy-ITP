package com.main.backend.FreshlandDairy.entity;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "salary")
public class Salary {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	
	@Column(name = "eid")
	private String eid;
	
	@Column(name = "month")
	private String month;
	
	@Column(name = "year")
	private long year;
	
	@Column(name = "job")
	private String job;
	
	@Column(name = "basic")
	private double basic;
	
	@Column(name = "ot")
	private double ot;
	
	@Column(name = "bonus")
	private double bonus;
	
	@Column(name = "etf")
	private double etf;
	
	@Column(name = "epf")
	private double epf;
	
	@Column(name = "totalc")
	private double total;

	public Salary() {
		super();
	}

	public Salary( String eid, String month, long year, String job, double basic, double ot, double bonus, double etf,
			double epf, double total) {
		super();
		this.eid = eid;
		this.month = month;
		this.year = year;
		this.job = job;
		this.basic = basic;
		this.ot = ot;
		this.bonus = bonus;
		this.etf = etf;
		this.epf = epf;
		this.total = total;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	
	
	public String getEid() {
		return eid;
	}

	public void setEid(String eid) {
		this.eid = eid;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public long getYear() {
		return year;
	}

	public void setYear(long year) {
		this.year = year;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public double getBasic() {
		return basic;
	}

	public void setBasic(double basic) {
		this.basic = basic;
	}

	public double getOt() {
		return ot;
	}

	public void setOt(double ot) {
		this.ot = ot;
	}

	public double getBonus() {
		return bonus;
	}

	public void setBonus(double bonus) {
		this.bonus = bonus;
	}

	public double getEtf() {
		return etf;
	}

	public void setEtf(double etf) {
		this.etf = etf;
	}

	public double getEpf() {
		return epf;
	}

	public void setEpf(double epf) {
		this.epf = epf;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
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
		Salary other = (Salary) obj;
		return id == other.id;
	}
	
	
}

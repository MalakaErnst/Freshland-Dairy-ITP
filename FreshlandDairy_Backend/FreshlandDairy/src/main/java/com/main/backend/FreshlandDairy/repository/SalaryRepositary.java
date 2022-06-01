package com.main.backend.FreshlandDairy.repository;

import com.main.backend.FreshlandDairy.entity.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

public interface SalaryRepositary extends JpaRepository <Salary, Long>{
	@Query(value="SELECT * FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	List<Salary> searchsalary(String month, Long year);
	
	@Query(value="SELECT SUM(s.basic) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double basicSum(String month, Long year);
	@Query(value="SELECT SUM(s.bonus) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double bonusSum(String month, Long year);
	@Query(value="SELECT SUM(s.epf) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double epfSum(String month, Long year);
	@Query(value="SELECT SUM(s.etf) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double etfSum(String month, Long year);
	@Query(value="SELECT SUM(s.totalc) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double totalSum(String month, Long year);
	@Query(value="SELECT SUM(s.ot) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double otSum(String month, Long year);
}

package com.main.backend.FreshlandDairy.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.main.backend.FreshlandDairy.entity.FmBillDetails;


@Repository
public interface FmBillRepositary extends JpaRepository <FmBillDetails, Long>{
	
	@Query(value = "SELECT * FROM fmbills WHERE discription LIKE %?1%", nativeQuery = true) 
	List<FmBillDetails> findBySearchTerm(String searchTerm);
	
	@Query(value = "SELECT * FROM fmbills WHERE billmonth = ?1 AND billyear = ?2", nativeQuery = true) 
	List<FmBillDetails> getarreybyDate(String month, String year);
	
	@Query(value = "SELECT COUNT(*) FROM fmbills WHERE billmonth = ?1 AND billyear = ?2", nativeQuery = true) 
	int getCountbyDate(String month, String year);
	
	@Query(value = "SELECT SUM(amount) FROM fmbills WHERE billmonth = ?1 AND billyear = ?2", nativeQuery = true) 
	double getSumbyDate(String month, String year);

}

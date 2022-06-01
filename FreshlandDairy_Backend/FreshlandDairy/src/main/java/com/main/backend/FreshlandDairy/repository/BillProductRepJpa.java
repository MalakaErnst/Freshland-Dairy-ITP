package com.main.backend.FreshlandDairy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.main.backend.FreshlandDairy.entity.BillProduct;
import com.main.backend.FreshlandDairy.entity.BillProductPK;


//public interface BillProductRepJpa extends JpaRepository<BillProduct, Long> {
//
//}

@Repository
public interface BillProductRepJpa extends JpaRepository<BillProduct, BillProductPK> {
	
	
	@Query(value ="SELECT * FROM bill_product b WHERE b.id = ?1", nativeQuery = true)
	List<BillProduct> retreveobject(Long key);
	
	

}
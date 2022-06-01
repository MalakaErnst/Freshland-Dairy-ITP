package com.main.backend.FreshlandDairy.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.main.backend.FreshlandDairy.entity.RawMaterial;




@Repository
public interface RawMaterialRepositary extends JpaRepository <RawMaterial, Long>{
	@Query(value = "SELECT * FROM rawmaterial WHERE date LIKE %?1%", nativeQuery = true) 
	List<RawMaterial> findBySearchTerm(String searchTerm);
}

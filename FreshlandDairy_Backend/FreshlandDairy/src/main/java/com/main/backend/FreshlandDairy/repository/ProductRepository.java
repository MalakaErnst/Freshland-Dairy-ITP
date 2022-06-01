package com.main.backend.FreshlandDairy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.backend.FreshlandDairy.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}

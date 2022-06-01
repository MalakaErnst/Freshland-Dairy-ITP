package com.main.backend.FreshlandDairy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.main.backend.FreshlandDairy.entity.ShopOrderDetails;
import com.main.backend.FreshlandDairy.entity.ShopOrderDetailsPK;

@Repository
public interface ShopOrderDetailsRepository extends JpaRepository<ShopOrderDetails, ShopOrderDetailsPK>{
	
	//List<ShopOrderDetails> findByTransactionID(Long transactionID);
}

package com.main.backend.FreshlandDairy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.backend.FreshlandDairy.entity.NewBill;



@Repository
public interface NewBillRepository extends JpaRepository<NewBill, Long> {

}

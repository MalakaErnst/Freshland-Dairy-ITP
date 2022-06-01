package com.main.backend.FreshlandDairy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.backend.FreshlandDairy.entity.Rating;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long>{

}

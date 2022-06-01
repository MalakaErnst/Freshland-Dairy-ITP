package com.main.backend.FreshlandDairy.repository;
//import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.main.backend.FreshlandDairy.entity.*;



public interface AccountRepositary extends JpaRepository<Account, Long>{
	

	@Query(value="SELECT * FROM accounts a  WHERE a.month=?1 OR a.year=?2", nativeQuery = true)
	List<Account> findBydate(String month, Long year);
	
	@Query(value="SELECT * FROM accounts a  WHERE a.account_type=?1 AND a.month=?2 AND a.year=?3", nativeQuery = true)
	List<Account> findBydate(String type, String month, Long year);
	
	
	
	@Query(value="SELECT SUM(a.amount) FROM accounts a  WHERE a.month=?1 OR a.year=?2", nativeQuery = true)
	double getSum(String accountType, Long year);
	
	@Query(value="SELECT SUM(a.amount) FROM accounts a  WHERE a.account_type=?1 AND a.month=?2 AND a.year=?3", nativeQuery = true)
	double getSum(String accountType, String month, Long year);
	
	@Query(value="SELECT COUNT(*) FROM accounts a  WHERE a.department=?3 AND a.month=?1 AND a.year=?2", nativeQuery = true)
	int searchAccountcount(String month, Long year, String Department);
	
	
	
	@Query(value="SELECT SUM(s.epf) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double epfSum(String month, Long year);
	
	@Query(value="SELECT SUM(s.etf) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double etfSum(String month, Long year);
	
	@Query(value="SELECT SUM(s.totalc) FROM salary s  WHERE s.month=?1 AND s.year=?2", nativeQuery = true)
	double totalsalarySum(String month, Long year);
	
	
	//bills
	
	@Query(value="SELECT SUM(b.amount) FROM fmbills b  WHERE b.billmonth=?1 AND b.billyear=?2", nativeQuery = true)
	double billSum(String month, String year);
	

}

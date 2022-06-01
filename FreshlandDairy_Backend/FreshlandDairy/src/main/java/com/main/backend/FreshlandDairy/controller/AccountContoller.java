package com.main.backend.FreshlandDairy.controller;
//import java.util.Date;
import java.util.HashMap;
import com.main.backend.FreshlandDairy.repository.*;
import com.main.backend.FreshlandDairy.jwt.resource.*;
import com.main.backend.FreshlandDairy.entity.*;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")


@RestController
@RequestMapping("/users/accounts")
public class AccountContoller {
	@Autowired
	public AccountRepositary accountripositary;
	
	@GetMapping("")
	public List <Account> getAllAccounts() {
		return accountripositary.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity <Account> getAccount(@PathVariable long id) {
		Account account = accountripositary.findById(id).orElseThrow(() -> new AccountExeption("account not found"));
		return ResponseEntity.ok(account);
	}
	
	@PostMapping("")
	public Account createBill ( @RequestBody Account account){
		return accountripositary.save(account);
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteAccount (@PathVariable long id){
		Account existinAccount = accountripositary.findById(id).orElseThrow(() -> new AccountExeption("user not found"));
		accountripositary.delete(existinAccount);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity <Account> updateAccount (@PathVariable long id, @RequestBody Account account){
		Account existinAccount = accountripositary.findById(id).orElseThrow(() -> new AccountExeption("user not found"));
		
		existinAccount.setMonth(account.getMonth());
		existinAccount.setAmount(account.getAmount());
		existinAccount.setYear(account.getYear());
		existinAccount.setDepartment(account.getDepartment());
		existinAccount.setAccountType(account.getAccountType());
		Account updated = accountripositary.save(existinAccount);
		return ResponseEntity.ok(updated);
		
	}
	
	
	@GetMapping("/getreportobjects/{accountType}/{month}/{year}")
	public List <Account> searchbydate(@PathVariable String accountType, @PathVariable String month, @PathVariable Long year) {
		//return accountripositary.findBydate(month, year);
		return accountripositary.findBydate(accountType, month, year);
	}
	
	@GetMapping("/getreportsums/{accountType}/{month}/{year}")
	public double getSum(@PathVariable String accountType, @PathVariable String month, @PathVariable Long year) {
		//return accountripositary.getSum(month, year);
		return accountripositary.getSum(accountType, month, year);
	}
	
	
	
	
	@GetMapping("/makesalaryaccount/{month}/{year}")
	public Account makesalaryaccount(@PathVariable String month, @PathVariable Long year) {
		
		int countcheching = accountripositary.searchAccountcount(month, year, "salary");
		
		Account existinAccount = new Account();
		
		double total = accountripositary.totalsalarySum(month, year);
		double epf = accountripositary.epfSum(month, year);
		double etf = accountripositary.etfSum(month, year);
		
		existinAccount.setAccountType("Expence");
		existinAccount.setAmount(total-epf-etf);
		existinAccount.setDepartment("salary");
		existinAccount.setMonth(month);
		existinAccount.setYear(year);
		
		if ((countcheching <1)&&(total != 0)) {
			
		accountripositary.save(existinAccount);
			
		}
		
		
		return existinAccount;
	}
	
	@GetMapping("/makeBillaccount/{month}")
	public Account makeBillaccount(@PathVariable String month) {
		
		String dateParts[] = month.split("-");
		 
        
        String tmonth = dateParts[1];
        String year = dateParts[0];
        
        String monthString;
        switch (tmonth) {
            case "01":  monthString = "january";       break;
            case "02":  monthString = "february";      break;
            case "03":  monthString = "march";         break;
            case "04":  monthString = "april";         break;
            case "05":  monthString = "may";           break;
            case "06":  monthString = "june";          break;
            case "07":  monthString = "july";          break;
            case "08":  monthString = "august";        break;
            case "09":  monthString = "september";     break;
            case "10": monthString = "october";       break;
            case "11": monthString = "november";      break;
            case "12": monthString = "december";      break;
            default: monthString = "Invalid month"; break;
        }
        
		int countcheching = accountripositary.searchAccountcount(monthString, (long) 2021, "Finance Bills");
		
		Account existinAccount = new Account();
		
		double total = accountripositary.billSum(monthString, year);
		
		existinAccount.setAccountType("Expence");
		existinAccount.setAmount(total);
		existinAccount.setDepartment("Finance Bills");
		existinAccount.setMonth(monthString);
		existinAccount.setYear(Long.parseLong(year));
		
		if ((countcheching <1)&&(total != 0)) {
			
		accountripositary.save(existinAccount);
			
		}
		
		
		return existinAccount;
	}
}

package com.main.backend.FreshlandDairy.controller;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
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
import com.main.backend.FreshlandDairy.repository.*;
import com.main.backend.FreshlandDairy.jwt.resource.*;
import com.main.backend.FreshlandDairy.entity.*;



@CrossOrigin(origins="http://localhost:4200")


@RestController
@RequestMapping("/users")
public class FmBillController {
	
	@Autowired
	public FmBillRepositary billrepositary;
	
	
	
	@GetMapping("/bills")
	public List <FmBillDetails> getAllBills() {
		return billrepositary.findAll();
	}
	
	@GetMapping("/bills/{id}")
	public ResponseEntity <FmBillDetails> getBill(@PathVariable long id) {
		FmBillDetails bill = billrepositary.findById(id).orElseThrow(() -> new FmBillExeption("user not found"));
		return ResponseEntity.ok(bill);
	}
	
	
	
	
	@PostMapping("/bills")
	public FmBillDetails createBill ( @RequestBody FmBillDetails bill){
		FmBillDetails existinBill = new FmBillDetails();
		
		existinBill.setDiscription(bill.getDiscription());
		existinBill.setAmount(bill.getAmount());
		existinBill.setBillDate(bill.getBillDate());
		
		
		DateFormat dateFormat = new SimpleDateFormat("YYYY-DD-MM");
		String strDate = dateFormat.format(bill.getBillDate());
		
		String dateParts[] = strDate.split("-");
		 
        
        String month = dateParts[2];
        String year = dateParts[0];
        
        String monthString;
        switch (month) {
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
		
        existinBill.setBillmonth(monthString);
        existinBill.setBillyear(year);
		existinBill.setBillType(bill.getBillType());
		return billrepositary.save(existinBill);
		
	}
	
	
	
	@DeleteMapping("/bills/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteBill (@PathVariable long id){
		
		FmBillDetails existinBill = billrepositary.findById(id).orElseThrow(() -> new FmBillExeption("user not found"));
		
		billrepositary.delete(existinBill);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	 
	
	
	
	@PutMapping("/bills/{id}")
	public ResponseEntity <FmBillDetails> updateBill (@PathVariable long id, @RequestBody FmBillDetails bill){
		
		FmBillDetails existinBill = billrepositary.findById(id).orElseThrow(() -> new FmBillExeption("user not found"));
		
		existinBill.setDiscription(bill.getDiscription());
		existinBill.setAmount(bill.getAmount());
		existinBill.setBillDate(bill.getBillDate());
		
		DateFormat dateFormat = new SimpleDateFormat("YYYY-DD-MM");
		String strDate = dateFormat.format(bill.getBillDate());
		
		String dateParts[] = strDate.split("-");
		 
        
        String month = dateParts[2];
        String year = dateParts[0];
        
        String monthString;
        switch (month) {
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
		
        existinBill.setBillmonth(monthString);
        existinBill.setBillyear(year);
		existinBill.setBillType(bill.getBillType());
		
		
		
		existinBill.setBillType(bill.getBillType());
		FmBillDetails updated = billrepositary.save(existinBill);
		return ResponseEntity.ok(updated);
	}
	
	@GetMapping("/bills/search/{searchTerm}")
	public List <FmBillDetails> searchBills(@PathVariable String searchTerm) {
		String dateParts[] = searchTerm.split("-");
		 
        
        String month = dateParts[1];
        String year = dateParts[0];
        
        String monthString;
        switch (month) {
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
		
		return billrepositary.getarreybyDate(monthString, year);
	}
	
	@GetMapping("/bills/search/count/{searchTerm}")
	public int searchBillcount(@PathVariable String searchTerm) {
		String dateParts[] = searchTerm.split("-");
		 
        
        String month = dateParts[1];
        String year = dateParts[0];
        
        String monthString;
        switch (month) {
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
		
		return billrepositary.getCountbyDate(monthString, year);
	}
	
	@GetMapping("/bills/search/sum/{searchTerm}")
	public double searchBillSum(@PathVariable String searchTerm) {
		String dateParts[] = searchTerm.split("-");
		 
        
        String month = dateParts[1];
        String year = dateParts[0];
        
        String monthString;
        switch (month) {
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
		
		return billrepositary.getSumbyDate(monthString, year);
	}
	

}

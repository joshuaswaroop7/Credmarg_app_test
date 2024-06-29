package com.app.credmarg_backend.controller;

// EmailController.java

import com.app.credmarg_backend.dto.VendorDto;
import com.app.credmarg_backend.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/emails")
public class EmailController {
    @Autowired
    private VendorService vendorService;

    private List<String> sentEmails = new ArrayList<>();

    @GetMapping("/check-email/{email}")
    public ResponseEntity<Boolean> checkEmailExists(@PathVariable("email") String email){
        boolean exists = vendorService.checkEmailExists(email);
        return ResponseEntity.ok(exists);
    }
    @GetMapping("/sent-emails")
    public List<String> getAllSentEmails() {
        return sentEmails;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestParam String email, @RequestParam String message) {
        // Mock sending email logic
        sentEmails.add("Sent email to: " + email + " with message: " + message);

        return ResponseEntity.ok("Email sent successfully");
    }

}


package com.app.credmarg_backend.controller;

import com.app.credmarg_backend.dto.VendorDto;
import com.app.credmarg_backend.service.VendorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendor")
public class VendorController {

    private VendorService vendorService;

    public VendorController(VendorService vendorService){
        this.vendorService= vendorService;
    }

    @PostMapping("/save")
    public ResponseEntity<VendorDto> createVendor(@RequestBody VendorDto vendorDto){
        VendorDto vendor = vendorService.createVendor(vendorDto);
        return ResponseEntity.ok(vendor);
    }

    @GetMapping("/getAllVendors")
    public ResponseEntity<List<VendorDto>> getAllVendors(){
        List<VendorDto> allVendors = vendorService.getAllVendors();
        return ResponseEntity.ok(allVendors);
    }

    @GetMapping("{id}")
    public ResponseEntity<VendorDto> getVendorById(@PathVariable("id") Long id){
        VendorDto vendorById = vendorService.getVendorById(id);
        return ResponseEntity.ok(vendorById);
    }
}

package com.app.credmarg_backend.service;

import com.app.credmarg_backend.dto.VendorDto;

import java.util.List;

public interface VendorService {

    VendorDto createVendor(VendorDto vendorDto);

    List<VendorDto> getAllVendors();

    VendorDto getVendorById(Long vendorId);

    boolean checkEmailExists(String email);
}

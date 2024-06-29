package com.app.credmarg_backend.mapper;

import com.app.credmarg_backend.dto.VendorDto;
import com.app.credmarg_backend.entity.Vendor;

public class VendorMapper {

    public static VendorDto mapToVenderDto(Vendor vendor){
        return new VendorDto(
                vendor.getVendorId(),
                vendor.getEmail(),
                vendor.getName(),
                vendor.getUpi()
        );
    }

    public static Vendor mapToVendor(VendorDto vendorDto){
        return new Vendor(
                vendorDto.getVendorId(),
                vendorDto.getEmail(),
                vendorDto.getName(),
                vendorDto.getUpi()
        );
    }
}

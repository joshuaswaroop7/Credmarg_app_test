package com.app.credmarg_backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VendorDto {
    private Long vendorId;
    private String email;
    private String name;
    private String upi;
}

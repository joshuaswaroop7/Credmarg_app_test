package com.app.credmarg_backend.repository;

import com.app.credmarg_backend.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
    Vendor findByEmail(String email);
}

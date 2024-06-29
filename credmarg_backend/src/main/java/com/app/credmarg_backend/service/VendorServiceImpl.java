package com.app.credmarg_backend.service;

import com.app.credmarg_backend.dto.VendorDto;
import com.app.credmarg_backend.entity.Vendor;
import com.app.credmarg_backend.exception.ResponseNotFoundException;
import com.app.credmarg_backend.mapper.VendorMapper;
import com.app.credmarg_backend.repository.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VendorServiceImpl implements VendorService{

    private VendorRepository vendorRepository;

    public VendorServiceImpl(VendorRepository vendorRepository){
        this.vendorRepository = vendorRepository;
    }
    @Override
    public VendorDto createVendor(VendorDto vendorDto) {
        Vendor vendor = VendorMapper.mapToVendor(vendorDto);
        Vendor vendorSaved = vendorRepository.save(vendor);
        return VendorMapper.mapToVenderDto(vendorSaved);
    }

    @Override
    public List<VendorDto> getAllVendors() {
        List<Vendor> allVendors = vendorRepository.findAll();
        return allVendors.stream().map((vendor) -> VendorMapper.mapToVenderDto(vendor)).collect(Collectors.toList());
    }

    @Override
    public VendorDto getVendorById(Long id) {
        Vendor vendor = vendorRepository.findById(id).orElseThrow(() -> new ResponseNotFoundException("Vendor doesn't exist with this "+ id));
        return VendorMapper.mapToVenderDto(vendor);
    }

    @Override
    public boolean checkEmailExists(String email) {
        Optional<Vendor> vendor = Optional.ofNullable(vendorRepository.findByEmail(email));
        return vendor.isPresent();
    }
}

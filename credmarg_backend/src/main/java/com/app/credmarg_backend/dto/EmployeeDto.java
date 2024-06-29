package com.app.credmarg_backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    private Long employeeId;
    private String email;
    private String name;
    private String designation;
    private double ctc;
}

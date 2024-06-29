package com.app.credmarg_backend.mapper;

import com.app.credmarg_backend.dto.EmployeeDto;
import com.app.credmarg_backend.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){
      return new EmployeeDto(
              employee.getEmployeeId(),
              employee.getEmail(),
              employee.getName(),
              employee.getDesignation(),
              employee.getCtc()
      );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getEmployeeId(),
                employeeDto.getEmail(),
                employeeDto.getName(),
                employeeDto.getDesignation(),
                employeeDto.getCtc()
        );
    }
}

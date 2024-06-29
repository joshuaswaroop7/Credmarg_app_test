package com.app.credmarg_backend.service;

import com.app.credmarg_backend.dto.EmployeeDto;
import com.app.credmarg_backend.entity.Employee;
import com.app.credmarg_backend.exception.ResponseNotFoundException;
import com.app.credmarg_backend.mapper.EmployeeMapper;
import com.app.credmarg_backend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee employeeSaved = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(employeeSaved);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> allEmployees = employeeRepository.findAll();
        return allEmployees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
      }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResponseNotFoundException("Employee doesn't exist with this " + id));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}

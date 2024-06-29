package com.app.credmarg_backend.controller;

import com.app.credmarg_backend.dto.EmployeeDto;
import com.app.credmarg_backend.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @PostMapping("/save")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto employee = employeeService.createEmployee(employeeDto);
        return ResponseEntity.ok(employee);
    }

    @GetMapping("/getAllEmployees")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> allEmployees = employeeService.getAllEmployees();
        return ResponseEntity.ok(allEmployees);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id){
        EmployeeDto employeeById = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employeeById);
    }

}
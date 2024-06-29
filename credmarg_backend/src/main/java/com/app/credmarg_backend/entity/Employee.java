package com.app.credmarg_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="designation", nullable = false)
    private String designation;

    @Column(name="ctc")
    private double ctc;

}

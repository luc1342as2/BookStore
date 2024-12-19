package com.example.Bookstore.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String isbn;
    private BigDecimal price;
    private int stock;

    public void setId(Long id) {
    }

    // Getters and setters
}

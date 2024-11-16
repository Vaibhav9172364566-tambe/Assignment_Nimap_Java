package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.demo.model.Category;
import com.demo.repository.CategoryRepository;

import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Page<Category> getCategories(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}

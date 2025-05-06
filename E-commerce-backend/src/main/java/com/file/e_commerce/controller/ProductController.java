package com.file.e_commerce.controller;

import com.file.e_commerce.entity.Product;
import com.file.e_commerce.response.ApiResponse;
import com.file.e_commerce.service.ProductService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/products")
@Tag(name = "Product APIs", description = "Operations related to products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public ResponseEntity<ApiResponse<List<Product>>> getProducts(@RequestParam(required = false) String search) {
        List<Product> products = (search != null && !search.isEmpty())
                ? productService.searchProducts(search)
                : productService.getAllProducts();
        if (products.isEmpty()) {
            ApiResponse<List<Product>> response = new ApiResponse<>("FAILURE", null, "No products found", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        ApiResponse<List<Product>> response = new ApiResponse<>("SUCCESS", products, null, null);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> getProduct(@PathVariable UUID id) {
        Optional<Product> productOpt = productService.getProductById(id);
        if (productOpt.isEmpty()) {
            ApiResponse<Product> response = new ApiResponse<>("FAILURE", null, "Product not found", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        ApiResponse<Product> response = new ApiResponse<>("SUCCESS", productOpt.get(), null, null);
        return ResponseEntity.ok(response);
    }
}

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Grid, CircularProgress, Typography, Box } from '@mui/material';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(searchTerm);

        // Normalize to array (search by ID returns object)
        const normalizedData = Array.isArray(data)
          ? data
          : data
          ? [data]
          : [];

        setProducts(normalizedData);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please enter valid product ID or search term.');
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <Container maxWidth="xl">
      <SearchBar initialValue={searchTerm} />

      {loading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center" my={4}>
          {error}
        </Typography>
      ) : products.length > 0 ? (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid 
              key={product.id || Math.random()}
              sm={6}
              md={4}
              lg={3}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" align="center" my={4}>
          No products found. Try a different search term.
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;

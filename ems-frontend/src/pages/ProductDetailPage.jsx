import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Box, 
  CircularProgress,
  Paper,
  Chip
} from '@mui/material';
import { getProductById } from '../services/api';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Failed to load product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6" color="error" gutterBottom>
          {error || 'Product not found'}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
        >
          Back to Products
        </Button>
      </Container>
    );
  }

  const { name, description, price, brand, category, imageUrl } = product;

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imageUrl || 'https://via.placeholder.com/600x400?text=No+Image'}
              alt={name}
              sx={{ 
                width: '100%', 
                height: 'auto',
                maxHeight: 500,
                objectFit: 'contain',
                display: 'block',
                mx: 'auto'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Showing category */}
            <Chip 
              label={category} 
              color="primary" 
              sx={{ mb: 2 }} 
            />
            <Typography variant="h3" component="h1" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${price.toFixed(2)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Brand: {brand}
            </Typography>
            
            <Box sx={{ my: 4 }}>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" paragraph>
                {description || 'No description available.'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                fullWidth
              >
                Add to Cart
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                fullWidth
              >
                Buy Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetailPage;

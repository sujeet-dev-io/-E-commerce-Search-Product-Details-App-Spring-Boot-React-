import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // If product is missing or malformed, don't render the card
  if (!product || !product.id) return null;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea 
        onClick={() => navigate(`/products/${product.id}`)}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={product.name || 'Product Image'}
          sx={{ objectFit: 'contain', p: 1, backgroundColor: '#f5f5f5' }}
        />
        <CardContent sx={{ width: '100%' }}>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.name || 'No name'}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {product.brand || 'No brand'}
          </Typography>
          {typeof product.price === 'number' && (
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              ${product.price.toFixed(2)}
            </Typography>
          )}
          {product.category && (
            <Typography 
              variant="caption" 
              color="white" 
              sx={{ 
                bgcolor: 'primary.main', 
                px: 1, 
                py: 0.5, 
                borderRadius: 1,
                display: 'inline-block',
                mt: 1
              }}
            >
              {product.category}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          fullWidth 
          variant="contained"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

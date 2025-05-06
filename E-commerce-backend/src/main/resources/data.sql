CREATE TABLE product (
    id UUID DEFAULT RANDOM_UUID() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    brand VARCHAR(255) NOT NULL,
    category VARCHAR(50),
    image_url VARCHAR(800) NOT NULL
);


INSERT INTO product (name, description, price, brand, category, image_url) VALUES
('IPhone 13', 'Latest Apple smartphone', 799.99, 'Apple', 'ELECTRONICS', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large_2x.jpg'),
('Samsung Galaxy', 'Popular Android phone', 699.00, 'Samsung', 'ELECTRONICS', 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg'),
('Nike Air Max', 'Running shoes', 129.99, 'Nike', 'FASHION', 'https://images.pexels.com/photos/9537432/pexels-photo-9537432.jpeg?auto=compress&cs=tinysrgb&w=600'),
('Atomic Habits', 'A practical guide to building good habits and breaking bad ones by James Clear.', 16.99, 'Penguin', 'BOOKS', 'https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png'),
('Philips Air Fryer', 'Oil-free cooking with rapid air technology and easy temperature control.', 129.99, 'Philips', 'HOME_APPLIANCES', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Philips-HD9280-91-Connected-XL-air-fryer-39a12b0.jpg?quality=90&webp=true&resize=375,341'),
('Hot Wheels Track', 'Exciting stunt track set with launcher and loops for ages 5 and up.', 34.99, 'Hot Wheels', 'TOYS', 'https://media.kohlsimg.com/is/image/kohls/6305715_ALT?wid=390&hei=390&op_sharpen=1'),
('24 Mantra Organic', 'Unpolished, organic toor dal rich in protein and fiber.', 2.49, '24 Mantra Organic', 'GROCERY', 'https://images.pexels.com/photos/2711712/pexels-photo-2711712.jpeg?auto=compress&cs=tinysrgb&w=600'),
('LEGO Classic game', 'Encourages open-ended building with vibrant bricks, eyes, wheels, and more — great for boosting creativity.', 44.99, 'LEGO', 'TOYS', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2_duplo_lego_bricks.jpg/800px-2_duplo_lego_bricks.jpg'),
('Samsung Washing Machine', 'Top-load washing machine with Center Jet technology for powerful yet gentle cleaning and quick wash modes.', 339.99, 'Samsung', 'HOME_APPLIANCES', 'https://m.media-amazon.com/images/I/71wbKtFU09L.jpg'),
('The Psychology of Money', 'Timeless lessons on wealth, greed, and happiness by Morgan Housel, exploring how behavior influences financial success.', 18.50, 'Harriman House', 'BOOKS', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/book/c/9/0/the-psychology-of-money-original-imah7h2yzqh5tjsh.jpeg?q=90&crop=false'),
('Urad Dal', 'High-protein, unpolished moong dal packed with essential nutrients, sourced sustainably and hygienically processed.', 2.99, 'Tata Consumer Products', 'GROCERY', 'https://www.jiomart.com/images/product/original/rvvgfe5fkd/tata-sampann-unpolished-moong-dal-yellow-4kg-pack-of-4-x-1kg-product-images-orvvgfe5fkd-p609584063-0-202407261514.jpg?im=Resize=(420,420)'),
('Ikigai', 'An international bestseller that reveals the Japanese secret to a long and happy life by exploring passion, mission, vocation, and profession in harmony.', 14.75, 'Penguin Random House India Pvt. Ltd.', 'BOOKS', 'https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg'),
('Dryer', 'Compact and energy-efficient electric clothes dryer with advanced moisture sensing, anti-wrinkle setting, and customizable temperature control for everyday home use.', 269.00, 'Whirlpool Home Appliances Pvt. Ltd. (India Division)', 'HOME_APPLIANCES', 'https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
('Drone', 'Lightweight mini drone for kids with altitude hold, 360° flips, LED lights, and simple controls — ideal for indoor fun and learning flight basics safely.', 52.00, 'Holy Stone Tech Innovations Ltd., Shenzhen', 'TOYS', 'https://m.media-amazon.com/images/I/61al5gk0FyL._AC_UF1000,1000_QL80_.jpg');









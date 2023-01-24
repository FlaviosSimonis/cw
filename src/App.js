import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: "https://images.unsplash.com/photo-1483140900273-56364d20ddc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: "https://images.unsplash.com/photo-1583883773608-6b2bcee72242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: "https://images.unsplash.com/photo-1506920503195-c85ce30dbdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({title, id, imageUrl}) => (
        <div key={id} className="category-container">
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))} 
    </div>
  );
};

export default App;

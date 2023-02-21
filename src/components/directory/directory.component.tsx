import { Key } from 'react';

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: "https://images.unsplash.com/photo-1483140900273-56364d20ddc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: "https://images.unsplash.com/photo-1583883773608-6b2bcee72242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: "https://images.unsplash.com/photo-1506920503195-c85ce30dbdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'Womens',
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'Mens',
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/mens'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
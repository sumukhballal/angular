import { comments } from './comments';

export class Dish { 

    id: number;
    name: string;
    description: string;
    image: string;
    featured: boolean;
    category: string;
    price: string;
    label: string;
    comments: comments[];

}



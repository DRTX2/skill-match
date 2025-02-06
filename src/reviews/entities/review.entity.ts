import { User } from "src/users/entities/user.entity";

export class Review {
    id: number;
    rating: number;
    comment: string;
    reviewerId: number;
    reviewedUserId: number;
    createdAt: Date;
    reviewer?: User;
    reviewedUser?: User;

    // constructor(id, rating, comment, reviewerId, reviewedUserId) { ... }
  }
  

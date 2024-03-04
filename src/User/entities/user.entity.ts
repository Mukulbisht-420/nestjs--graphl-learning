import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserGQL {
  @Field(() => Int)
  id: number;

  @Field()
  fullname: string;

  @Field()
  role: string;
  
  @Field()
  gender: string;
  
  @Field()
  company: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
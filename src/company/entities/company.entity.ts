import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CompanyGQL {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
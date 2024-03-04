import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  fullname: string;

  @Field()
  role: string;

  @Field()
  gender: string;

  @Field()
  company: string;
}
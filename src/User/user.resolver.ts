import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserGQL } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Resolver(of => UserGQL)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [UserGQL])
  async users(): Promise<UserGQL[]> {
    return this.userService.findAll();
  }

  @Mutation(returns => UserGQL)
  async createUser(@Args('createUserDto') createUserDto: CreateUserDto): Promise<UserGQL> {
    console.log("updated code")
    return this.userService.create(createUserDto);
  }
}
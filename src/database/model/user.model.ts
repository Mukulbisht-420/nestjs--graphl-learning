import { Column, Model, Table,PrimaryKey,AutoIncrement,DataType} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

  @Column
  fullname: string;

  @Column
  role: string;
  
  @Column
  gender: string;
  
  @Column
  company: string;

  @Column({ type: DataType.DATE })
  createdAt?: Date;

  @Column({ type: DataType.DATE })
  updatedAt?: Date;

};
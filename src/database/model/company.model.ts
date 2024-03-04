import { Column, Model, Table,PrimaryKey,AutoIncrement} from 'sequelize-typescript';

@Table
export class Company extends Model<Company> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

  @Column
  name: string;
};
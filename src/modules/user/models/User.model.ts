import { Table, Column } from 'sequelize-typescript';

@Table
export class User {
  @Column
  name: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}

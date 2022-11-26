import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_table' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'birth' })
  birth: number;

  @Column('varchar', { name: 'email', length: 50 })
  email: string;

  @Column('varchar', { name: 'pw', length: 60 })
  pw: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;
}

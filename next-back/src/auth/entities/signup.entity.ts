import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Signup')
export class Signup {
  @PrimaryColumn()
  id: number;

  @Column({ length: 30 })
  nickname: string;

  @Column({ length: 8 })
  birth: number;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 60 })
  pw: string;
}

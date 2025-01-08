import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PrivateChat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user1: User;

  @ManyToOne(() => User)
  user2: User;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

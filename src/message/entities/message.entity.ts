import { PrivateChat } from "src/privatechat/entities/privatechat.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryColumn({type: 'char', length: 36})
    private id: string;
  
    @ManyToOne(() => PrivateChat , (chat) => chat.id)
    chat: PrivateChat;
  
    @ManyToOne(() => User)
    sender: User;
  
    @Column()
    message: string;
  
    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}

import {
  Entity, PrimaryGeneratedColumn, Column, BeforeInsert,
} from 'typeorm';

import uuidv4 from 'uuid/v4';

export enum ProviderEnum {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
}

export enum OpenImageChoiceEnum {
  OPEN = 'OPEN',
  FRIEND = 'FRIEND',
  CLOSE = 'CLOSE',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  nickname: string;

  @Column({ type: 'enum', enum: ProviderEnum })
  provider: ProviderEnum;

  @Column('uuid')
  snsId: string;

  @Column({
    type: 'enum',
    enum: OpenImageChoiceEnum,
    default: OpenImageChoiceEnum.OPEN,
  })
  openImageChoice: OpenImageChoiceEnum;

  @BeforeInsert()
  addSnsId() {
    this.snsId = uuidv4();
  }
}

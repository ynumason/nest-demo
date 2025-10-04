import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_database' })
// name 表名 配置映射到数据库表名 不指定以实体类名字创建数据表
export class User {
  // 主键自增 name一致可不写
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键id' })
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'username',
    comment: '用户名',
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'password',
    comment: '密码',
    nullable: false,
  })
  password: string;

  @Column('tinyint', {
    name: 'is_del',
    comment: '是否删除,1表示删除,0表示正常',
    default: () => 0,
  })
  isDel: number;

  @CreateDateColumn({
    name: 'create_at',
    comment: '创建的时间',
    type: 'timestamp',
    nullable: false,
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    comment: '更新的时间',
    type: 'timestamp',
    nullable: false,
  })
  updateAt: Date;
}

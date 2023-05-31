import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('fundlist')
export class Fund {
  @PrimaryColumn()
  id: number;
  @Column()
  fund_code: string;
  @Column()
  fund_eng_name: string;
  @Column()
  fund_type: string;
}

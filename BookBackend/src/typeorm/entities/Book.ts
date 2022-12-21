import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'books'})
export class Book{

@PrimaryGeneratedColumn()
id:number;

@Column({unique:true,nullable:false})
name:string;
 
@Column({nullable:false})
quantity:number

@Column({nullable:false})
price:number


}
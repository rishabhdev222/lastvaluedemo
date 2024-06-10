/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PriceRecordWhereInput } from "./PriceRecordWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PriceRecordOrderByInput } from "./PriceRecordOrderByInput";

@ArgsType()
class PriceRecordFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PriceRecordWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PriceRecordWhereInput, { nullable: true })
  @Type(() => PriceRecordWhereInput)
  where?: PriceRecordWhereInput;

  @ApiProperty({
    required: false,
    type: [PriceRecordOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PriceRecordOrderByInput], { nullable: true })
  @Type(() => PriceRecordOrderByInput)
  orderBy?: Array<PriceRecordOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PriceRecordFindManyArgs as PriceRecordFindManyArgs };

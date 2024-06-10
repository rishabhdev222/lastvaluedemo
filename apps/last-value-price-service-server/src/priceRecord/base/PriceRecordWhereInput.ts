/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FinancialInstrumentWhereUniqueInput } from "../../financialInstrument/base/FinancialInstrumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class PriceRecordWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  asOf?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FinancialInstrumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialInstrumentWhereUniqueInput)
  @IsOptional()
  @Field(() => FinancialInstrumentWhereUniqueInput, {
    nullable: true,
  })
  financialInstrument?: FinancialInstrumentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  payload?: JsonFilter;
}

export { PriceRecordWhereInput as PriceRecordWhereInput };
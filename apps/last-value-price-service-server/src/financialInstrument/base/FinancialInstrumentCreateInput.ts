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
import { PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput } from "./PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinancialInstrumentCreateInput {
  @ApiProperty({
    required: false,
    type: () => PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput,
  })
  @ValidateNested()
  @Type(() => PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput)
  @IsOptional()
  @Field(() => PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput, {
    nullable: true,
  })
  priceRecords?: PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput;
}

export { FinancialInstrumentCreateInput as FinancialInstrumentCreateInput };

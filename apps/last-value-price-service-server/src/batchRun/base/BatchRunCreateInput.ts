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
import { BatchRunRecordCreateNestedManyWithoutBatchRunsInput } from "./BatchRunRecordCreateNestedManyWithoutBatchRunsInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumBatchRunStatus } from "./EnumBatchRunStatus";

@InputType()
class BatchRunCreateInput {
  @ApiProperty({
    required: false,
    type: () => BatchRunRecordCreateNestedManyWithoutBatchRunsInput,
  })
  @ValidateNested()
  @Type(() => BatchRunRecordCreateNestedManyWithoutBatchRunsInput)
  @IsOptional()
  @Field(() => BatchRunRecordCreateNestedManyWithoutBatchRunsInput, {
    nullable: true,
  })
  batchRunRecords?: BatchRunRecordCreateNestedManyWithoutBatchRunsInput;

  @ApiProperty({
    required: false,
    enum: EnumBatchRunStatus,
  })
  @IsEnum(EnumBatchRunStatus)
  @IsOptional()
  @Field(() => EnumBatchRunStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { BatchRunCreateInput as BatchRunCreateInput };

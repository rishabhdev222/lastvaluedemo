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
import { BatchRunRecordUpdateManyWithoutBatchRunsInput } from "./BatchRunRecordUpdateManyWithoutBatchRunsInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumBatchRunStatus } from "./EnumBatchRunStatus";

@InputType()
class BatchRunUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BatchRunRecordUpdateManyWithoutBatchRunsInput,
  })
  @ValidateNested()
  @Type(() => BatchRunRecordUpdateManyWithoutBatchRunsInput)
  @IsOptional()
  @Field(() => BatchRunRecordUpdateManyWithoutBatchRunsInput, {
    nullable: true,
  })
  batchRunRecords?: BatchRunRecordUpdateManyWithoutBatchRunsInput;

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

export { BatchRunUpdateInput as BatchRunUpdateInput };
/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BatchRunRecordWhereUniqueInput } from "../../batchRunRecord/base/BatchRunRecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BatchRunRecordUpdateManyWithoutBatchRunsInput {
  @Field(() => [BatchRunRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BatchRunRecordWhereUniqueInput],
  })
  connect?: Array<BatchRunRecordWhereUniqueInput>;

  @Field(() => [BatchRunRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BatchRunRecordWhereUniqueInput],
  })
  disconnect?: Array<BatchRunRecordWhereUniqueInput>;

  @Field(() => [BatchRunRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BatchRunRecordWhereUniqueInput],
  })
  set?: Array<BatchRunRecordWhereUniqueInput>;
}

export { BatchRunRecordUpdateManyWithoutBatchRunsInput as BatchRunRecordUpdateManyWithoutBatchRunsInput };

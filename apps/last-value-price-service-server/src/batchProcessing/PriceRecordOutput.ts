import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("PriceRecordOutputObject")
class PriceRecordOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => Date)
    @Type(() => Date)
    asOf!: Date;

    @Field(() => GraphQLJSON)
    payload!: InputJsonValue;
}

export { PriceRecordOutput as PriceRecordOutput };
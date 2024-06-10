/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BatchRun } from "./BatchRun";
import { BatchRunCountArgs } from "./BatchRunCountArgs";
import { BatchRunFindManyArgs } from "./BatchRunFindManyArgs";
import { BatchRunFindUniqueArgs } from "./BatchRunFindUniqueArgs";
import { CreateBatchRunArgs } from "./CreateBatchRunArgs";
import { UpdateBatchRunArgs } from "./UpdateBatchRunArgs";
import { DeleteBatchRunArgs } from "./DeleteBatchRunArgs";
import { BatchRunRecordFindManyArgs } from "../../batchRunRecord/base/BatchRunRecordFindManyArgs";
import { BatchRunRecord } from "../../batchRunRecord/base/BatchRunRecord";
import { BatchRunService } from "../batchRun.service";
@graphql.Resolver(() => BatchRun)
export class BatchRunResolverBase {
  constructor(protected readonly service: BatchRunService) {}

  async _batchRunsMeta(
    @graphql.Args() args: BatchRunCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BatchRun])
  async batchRuns(
    @graphql.Args() args: BatchRunFindManyArgs
  ): Promise<BatchRun[]> {
    return this.service.batchRuns(args);
  }

  @graphql.Query(() => BatchRun, { nullable: true })
  async batchRun(
    @graphql.Args() args: BatchRunFindUniqueArgs
  ): Promise<BatchRun | null> {
    const result = await this.service.batchRun(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BatchRun)
  async createBatchRun(
    @graphql.Args() args: CreateBatchRunArgs
  ): Promise<BatchRun> {
    return await this.service.createBatchRun({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BatchRun)
  async updateBatchRun(
    @graphql.Args() args: UpdateBatchRunArgs
  ): Promise<BatchRun | null> {
    try {
      return await this.service.updateBatchRun({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BatchRun)
  async deleteBatchRun(
    @graphql.Args() args: DeleteBatchRunArgs
  ): Promise<BatchRun | null> {
    try {
      return await this.service.deleteBatchRun(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [BatchRunRecord], { name: "batchRunRecords" })
  async findBatchRunRecords(
    @graphql.Parent() parent: BatchRun,
    @graphql.Args() args: BatchRunRecordFindManyArgs
  ): Promise<BatchRunRecord[]> {
    const results = await this.service.findBatchRunRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
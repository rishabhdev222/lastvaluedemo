import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BatchProcessingService } from "./batchprocessing.service";
import { BatchActionInput } from "../batchProcessing/BatchActionInput";
import { PriceRecordOutput } from "../batchProcessing/PriceRecordOutput";

@swagger.ApiTags("batchProcessings")
@common.Controller("batchProcessings")
export class BatchProcessingController {
  constructor(protected readonly service: BatchProcessingService) {}

  @common.Post("/batch/cancel")
  @swagger.ApiOkResponse({
    type: BatchActionInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CancelBatchRun(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<BatchActionInput> {
        return this.service.CancelBatchRun(body);
      }

  @common.Post("/batch/complete")
  @swagger.ApiOkResponse({
    type: BatchActionInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CompleteBatchRun(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<BatchActionInput> {
        return this.service.CompleteBatchRun(body);
      }

  @common.Get("/:id/fetch-last-price-record")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchLastPriceRecord(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<string> {
        return this.service.FetchLastPriceRecord(body);
      }

  @common.Get("/:id/get-last-price-record")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetLastPriceRecord(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<string> {
        return this.service.GetLastPriceRecord(body);
      }

  @common.Get("/price/:id")
  @swagger.ApiOkResponse({
    type: PriceRecordOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveLatestPriceRecord(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<PriceRecordOutput> {
        return this.service.RetrieveLatestPriceRecord(body);
      }

  @common.Post("/batch/start")
  @swagger.ApiOkResponse({
    type: BatchActionInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartBatchRun(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<BatchActionInput> {
        return this.service.StartBatchRun(body);
      }

  @common.Post("/batch/upload")
  @swagger.ApiOkResponse({
    type: BatchActionInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadRecords(
    @common.Body()
    body: BatchActionInput[]
  ): Promise<BatchActionInput> {
        return this.service.UploadRecords(body);
      }
}

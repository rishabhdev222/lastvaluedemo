import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BatchRunRecordServiceBase } from "./base/batchRunRecord.service.base";

@Injectable()
export class BatchRunRecordService extends BatchRunRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BatchRunServiceBase } from "./base/batchRun.service.base";

@Injectable()
export class BatchRunService extends BatchRunServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

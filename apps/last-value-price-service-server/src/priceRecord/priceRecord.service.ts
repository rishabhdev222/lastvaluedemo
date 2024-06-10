import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PriceRecordServiceBase } from "./base/priceRecord.service.base";

@Injectable()
export class PriceRecordService extends PriceRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

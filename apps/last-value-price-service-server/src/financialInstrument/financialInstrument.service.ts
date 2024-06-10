import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialInstrumentServiceBase } from "./base/financialInstrument.service.base";

@Injectable()
export class FinancialInstrumentService extends FinancialInstrumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Module } from "@nestjs/common";
import { FinancialInstrumentModuleBase } from "./base/financialInstrument.module.base";
import { FinancialInstrumentService } from "./financialInstrument.service";
import { FinancialInstrumentController } from "./financialInstrument.controller";
import { FinancialInstrumentResolver } from "./financialInstrument.resolver";

@Module({
  imports: [FinancialInstrumentModuleBase],
  controllers: [FinancialInstrumentController],
  providers: [FinancialInstrumentService, FinancialInstrumentResolver],
  exports: [FinancialInstrumentService],
})
export class FinancialInstrumentModule {}

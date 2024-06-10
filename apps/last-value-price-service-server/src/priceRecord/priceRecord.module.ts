import { Module } from "@nestjs/common";
import { PriceRecordModuleBase } from "./base/priceRecord.module.base";
import { PriceRecordService } from "./priceRecord.service";
import { PriceRecordController } from "./priceRecord.controller";
import { PriceRecordResolver } from "./priceRecord.resolver";

@Module({
  imports: [PriceRecordModuleBase],
  controllers: [PriceRecordController],
  providers: [PriceRecordService, PriceRecordResolver],
  exports: [PriceRecordService],
})
export class PriceRecordModule {}

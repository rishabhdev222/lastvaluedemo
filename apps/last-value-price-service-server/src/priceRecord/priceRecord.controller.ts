import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriceRecordService } from "./priceRecord.service";
import { PriceRecordControllerBase } from "./base/priceRecord.controller.base";

@swagger.ApiTags("priceRecords")
@common.Controller("priceRecords")
export class PriceRecordController extends PriceRecordControllerBase {
  constructor(protected readonly service: PriceRecordService) {
    super(service);
  }
}

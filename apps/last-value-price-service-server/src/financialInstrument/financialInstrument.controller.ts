import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinancialInstrumentService } from "./financialInstrument.service";
import { FinancialInstrumentControllerBase } from "./base/financialInstrument.controller.base";

@swagger.ApiTags("financialInstruments")
@common.Controller("financialInstruments")
export class FinancialInstrumentController extends FinancialInstrumentControllerBase {
  constructor(protected readonly service: FinancialInstrumentService) {
    super(service);
  }
}

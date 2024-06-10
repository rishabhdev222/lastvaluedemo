import * as graphql from "@nestjs/graphql";
import { FinancialInstrumentResolverBase } from "./base/financialInstrument.resolver.base";
import { FinancialInstrument } from "./base/FinancialInstrument";
import { FinancialInstrumentService } from "./financialInstrument.service";

@graphql.Resolver(() => FinancialInstrument)
export class FinancialInstrumentResolver extends FinancialInstrumentResolverBase {
  constructor(protected readonly service: FinancialInstrumentService) {
    super(service);
  }
}

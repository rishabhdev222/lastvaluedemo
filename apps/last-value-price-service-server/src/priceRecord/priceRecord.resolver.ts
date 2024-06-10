import * as graphql from "@nestjs/graphql";
import { PriceRecordResolverBase } from "./base/priceRecord.resolver.base";
import { PriceRecord } from "./base/PriceRecord";
import { PriceRecordService } from "./priceRecord.service";

@graphql.Resolver(() => PriceRecord)
export class PriceRecordResolver extends PriceRecordResolverBase {
  constructor(protected readonly service: PriceRecordService) {
    super(service);
  }
}
